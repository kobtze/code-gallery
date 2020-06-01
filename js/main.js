console.log('Starting up');

var gProjs = _getProjs();

function initPage() {
    generatePortfolioList();
    generatePortfolioModals();
}

function email () {
  var email = document.querySelector('#inputEmail').value;
  var subj = document.querySelector('#inputSubject').value;
  var body = document.querySelector('#inputBody').value;
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subj}&body=${body}`);
}

function generatePortfolioModals() {
    var projects = gProjs;
    var strHTMLs = projects.map(function (project) {
        return `
        <div class="portfolio-modal modal fade" id="portfolioModal${project.number}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}</p>
                    <a href="${project.url}">
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.image_full}" alt=""></a>
                    <p>${project.desc}</p>
                    <p class="proj-${project.number}-lables"></p>
                    <ul class="list-inline">
                      <li>Published: ${moment(project.publishedAt).format("dddd, MMMM Do YYYY")}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
      `
    });
    document.querySelector('.portfolio-modals-container').innerHTML = strHTMLs.join('');
    projects.map(function (project) {
        generateLabels(project)
    })
}

function generateLabels(project) {
    var labelsHTML = project.labels.map(function (label){
        return `<span class="badge badge-success">${label}</span>`
    })
    document.querySelector(`.proj-${project.number}-lables`).innerHTML = labelsHTML.join(' ');
}

function generatePortfolioList() {
    var projects = gProjs;
    var strHTMLs = projects.map(function (project) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.number}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.image_thumb}" alt="${project.name}">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
      `
    });
    document.querySelector('#portfolio-list').innerHTML = strHTMLs.join('');
}

function _getProjs() {
    return [
        {
            number: 1,
            id: 'minesweeper',
            name: 'Minesweeper',
            title: 'Don\'t get blown away',
            desc: 'The classic Windows game now online',
            url: 'https://kobtze.github.io/minesweeper-opt/',
            publishedAt: 1590274800000,
            labels: ['PC Game', 'Classic', 'Matrices', '2D Arrays', 'Recursion', 'Mouse events', 'localStorage', 'Developed from scratch', 'Custom functions'],
            image_thumb: 'minesweeper-thumbnail.jpg',
            image_full: 'minesweeper-full.jpg'
        },
        {
            number: 2,
            id: 'baloons-pop',
            name: 'Baloons Pop',
            title: 'Gotta Pop \'Em All',
            desc: 'Pop all baloons before they reach the sky and pollute our precious ozone!',
            url: 'https://kobtze.github.io/baloons-pop/',
            publishedAt: 1589958000000,
            labels: ['Game', 'Mouse events', 'CSS'],
            image_thumb: 'baloonspop-thumbnail.jpg',
            image_full: 'baloonspop-full.jpg'        },
        {
            number: 3,
            id: 'book-shop',
            name: 'Book Shop',
            title: 'Maintain your online bookshop',
            desc: 'Easily generate, maintain, update and customize your online book shop',
            url: 'https://kobtze.github.io/book-shop/',
            publishedAt: 1590670800000,
            labels: ['CRUDL', 'MVC', 'ECommerce', 'Random', 'CSS', 'localStorage'],
            image_thumb: 'bookshop-thumbnail.jpg',
            image_full: 'bookshop-full.jpg'
        },
        // {
        //     id: 'touch-the-nums',
        //     name: 'Touch The Numbers',
        //     title: 'Click all the numbers as fast as you can!',
        //     desc: 'lorem ipsum shubi dubi Ah Sheli ma hainyanim?',
        //     url: '#',
        //     publishedAt: 1590273000,
        //     labels: ['Matrices', '2D Arrays', 'Mouse events', 'CSS'],
        // },
    ];
}
