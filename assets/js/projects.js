$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/az-gomoku.png',
            link: 'pages/gomoku.html',
            title: 'AlphaZero-Gomoku',
            demo: 'pages/gomoku.html',
            technologies: ['ML', 'CNN', 'MCTS'],
            description: "A web application of Gomoku using the AlphaZero model. AlphaZero was proposed by Google DeepMind in 2018, and we implemented it to power our Gomoku application utilizing CNN and MCTS in a unified reinforcement learning framework.",
            categories: ['featured', 'ai']
        },
        {
            image: 'assets/images/churn-analysis.png',
            link: 'assets/download/churn_analysis.pdf',
            title: 'Churn Analysis',
            demo: false,
            technologies: ['ML'],
            description: "Predicting customer churn using data from IBM. Experimental results showed that using XGBoost as the base classifier combined with feature engineering significantly enhanced the prediction performance. Click the plot image above to read our technical report.",
            categories: ['featured', 'ai']
        },
        {
            image: 'assets/images/iter-blueprint.png',
            link: 'assets/download/iter.pdf',
            title: 'Interactive Map',
            demo: false,
            technologies: ['HCI'],
            description: "A software and hardware integrated interactive mapping system. Its main functions include travel footprint tracking, global geographic information display, and voice control with three input patterns, i.e., haptics click, touch screen control and voice control. Click the image above to read the report.",
            categories: ['featured', 'hci']
        },
        {
            image: 'assets/images/knapsack.png',
            link: 'assets/download/knapsack.pdf',
            title: 'Metaheuristics for 0-1 Knapsack',
            demo: false,
            technologies: ['ALGORITHM'],
            description: "On the adoption of Metaheuristics for Solving 0-1 Knapsack Problems. We explored three meta-heuristic algorithms, i.e., ACO, GA and QTS on the 0-1 knapsack questions. Submitted to the 22nd International Conference on Parallel and Distributed Computing, Applications and Technologies (PDCAT 2021). Click the image above to read the paper.",
            categories: ['featured', 'algo']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}" style="color:#FF0000;">Click for a LIVE demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
