document.addEventListener('DOMContentLoaded', () => {
    const jobListings = document.getElementById('job-listings');
    const searchInput = document.getElementById('search');

    // sample object of jobs
    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'New York, NY',
            description: 'Develop and maintain web applications.'
        },
        {
            title: 'Data Scientist',
            company: 'Data Inc.',
            location: 'San Francisco, CA',
            description: 'Analyze and interpret complex data sets.'
        },
        // Add more jobs --------
    ];

    const displayJobs = (jobs) => {
        jobListings.innerHTML = '';
        jobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');
            jobElement.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
            `;
            jobListings.appendChild(jobElement);
        });
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
        displayJobs(filteredJobs);
    });

    displayJobs(jobs);
});
