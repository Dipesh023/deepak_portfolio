// Fetch the skills from JSON and display them in the skills section
fetch('skills.json')
  .then(response => response.json())
  .then(data => {
    const skillsContainer = document.getElementById('skillsContainer');

    // Loop through each skill and create HTML elements
    data.skills.forEach(skill => {
      // Create skill card
      const skillCard = document.createElement('div');
      skillCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'p-6', 'text-center', 'hover:shadow-xl', 'transition', 'duration-300');

      // Add skill name
      const skillName = document.createElement('h3');
      skillName.classList.add('text-2xl', 'font-semibold', 'mb-2');
      skillName.innerText = skill.name;
      skillCard.appendChild(skillName);

      // Add skill level
      const skillLevel = document.createElement('p');
      skillLevel.classList.add('text-gray-600');
      skillLevel.innerText = skill.level;
      skillCard.appendChild(skillLevel);

      // Append the skill card to the container
      skillsContainer.appendChild(skillCard);
    });
  })
  .catch(error => console.error('Error fetching the skills:', error));
