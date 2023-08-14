const experiences = [
	{
		_id: 0,
		position: 'Data Science Engineering Intern',
        company: 'Teradata',
        time: 'May 2022 - August 2022',
		description: `description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...
        description here...description here...description here...description here...`,
		skills: [
			'Python',
			'Scikit-Learn',
			'Java',
			'TeradataSQL',
		],
		featured: true,
	},
    {
		_id: 1,
		position: 'Analytic Software Engineering Intern',
        company: 'Teradata',
        time: 'May 2023 - August 2023',
		description: `description here...`,
		skills: [
			'Python',
            'SQLAlchemy',
			'Flask',
			'TeradataSQL',
		],
		featured: true,
	},
];

function getAllExperiences() {
    return experiences;
}

export { getAllExperiences };