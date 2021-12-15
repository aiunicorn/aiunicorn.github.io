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
            demo: 'assets/download/churn_analysis.pdf',
            technologies: ['ML'],
            description: "Predicting customer churn using data from IBM. Experimental results showed that using XGBoost as the base classifier combined with feature engineering significantly enhanced the prediction performance.",
            categories: ['ai']
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
