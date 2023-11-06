
//Main Points Reveal/Hide Functions

function revealControlinfo() {
    var fluidMechanicspage = document.getElementById('fluid-mechanics');
    fluidMechanicspage.style.display = 'none'
    var simulationPage = document.getElementById('simulation');
    simulationPage.style.display = 'none';
    appliedStructuresPage = document.getElementById('applied-structures');
    appliedStructuresPage.style.display = 'none';
    var aVid = document.getElementById('a-vid')

    var controlSystemspage = document.getElementById('control');
    controlSystemspage.style.display = 'flex';

    controlSystemspage.style.animation = '.4s grow ease-out';
    controlSystemspage.style.transition = 'animation 3s ease-out';
}

function hideControlinfo() {
    var controlSystemspage = document.getElementById('control');
    controlSystemspage.style.animation = '.7s shrink ease-out 5s forwards'
}

function revealSimulationinfo() {
    var controlSystemspage = document.getElementById('control');
    controlSystemspage.style.display = 'none';
    var fluidMechanicspage = document.getElementById('fluid-mechanics');
    fluidMechanicspage.style.display = 'none';
    appliedStructuresPage = document.getElementById('applied-structures');
    appliedStructuresPage.style.display = 'none';

    var simulationPage = document.getElementById('simulation');
    simulationPage.style.display = 'flex';
    simulationPage.style.animation = '.4s grow ease-out';
    simulationPage.style.transition = 'animation 3s ease-out';
}

function hideSimulationinfo() {
    var simulationPage = document.getElementById('simulation');
    simulationPage.style.animation = '.7s shrink ease-out 5s forwards';
}

function revealFluidinfo() {
    var simulationPage = document.getElementById('simulation');
    simulationPage.style.display = 'none';
    var controlSystemspage = document.getElementById('control');
    controlSystemspage.style.display = 'none';
    var appliedStructurespage = document.getElementById('applied-structures');
    appliedStructurespage.style.display = 'none';

    var fluidMechanicspage = document.getElementById('fluid-mechanics');
    fluidMechanicspage.style.display = 'flex';
    fluidMechanicspage.style.animation = '.4s grow ease-out';
    fluidMechanicspage.style.transition = 'animation 3s ease-out';

}

function hideFluidinfo() {
    var fluidMechanicspage = document.getElementById('fluid-mechanics');
    fluidMechanicspage.style.animation = '.7s shrink ease-out 4.8s forwards';

}

function revealAppliedinfo() {
    var fluidMechanicspage = document.getElementById('fluid-mechanics');
    fluidMechanicspage.style.display = 'none'
    var simulationPage = document.getElementById('simulation');
    simulationPage.style.display = 'none';
    var controlSystemspage = document.getElementById('control');
    controlSystemspage.style.display = 'none';


    var appliedStructurespage = document.getElementById('applied-structures');
    appliedStructurespage.style.display = 'flex';
    appliedStructurespage.style.animation = '.4s grow ease-out';
    appliedStructurespage.style.transition = 'animation 3s ease-out';

}

function hideAppliedinfo() {
    var appliedStructurespage = document.getElementById('applied-structures');
    appliedStructurespage.style.animation = '.7s shrink ease-out 16s forwards';


}

//Main Points Reveal/Hide Functions

//Projects reveal Info Functions

let dataFiles = [
    "images/Report (4).pdf",
    'images/mail-attachment.googleusercontent.com_attachment_u_0__ui=2&ik=45a677f837&attid=0.1&permmsgid=msg-f_1777620701695062904&th=18ab609c25ea3378&view=att&disp=inline&realattid=f_lmso1mjc0&ser=1&saddbat=ANGjdJ97oqe7BSudQqfYV5d2eVpjGdi_6PpuSSuXoNuevt116WHo3ZX.pdf',
    'images/10defb14-d11b-4bef-8ef0-7bac26663707.pdf',
    'images/sodapdf-converted (1).pdf',
    'images/ZickurHomework6.pdf'
]

function projectBackbutton() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.animation = '1.0s slideoutleft ease-in both';
   
 
    
}

function revealStatefeedback() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both';
    projectInfocard.style.transition = 'animation .3s linear';
    var pdfBackup = document.getElementById('p-info-backup');
    pdfBackup.style.display='inline';

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    fullScreen.style.display = 'inline'
    exitfullscreen.style.display='none'


    rightButton.style.display = 'none'
    leftButton.style.display ='none'
    rightButton2.style.display = 'none'
    leftButton2.style.display ='none'


    projectPdf.style.display = 'inline';
    
    projectVideo.style.display = 'inline';
    slideShowone.style.display='none'
    slideShowtwo.style.display='none'
    

    projectTitle.innerHTML = 'State Feedback LQR Control Design for Simulated Single-Axle Chassis';
    projectTitle.style.fontSize ='30px'
    projectSummary.innerHTML = 'Designed a state feedback controller by linearizing a vector-valued function filled state matrix and creating a Q and R weighted matrix. Engineering requirements for the time of completion, lateral error, and torque ensured not only that the controller drives, balances, and aligns the chassis, but additionally guarantees no excess actuator force (5 N-m) and definite runnability. The LQR design allowed for a more “hands on” tunability regarding the dynamics of state cost and control cost, state-space variables. A report with full explanation, derivation, and data analysis was created in LaTex following AIAA formatting and the video included shows the  simulation running a complete loop with my controller.    ';
    projectPdf.data = dataFiles[0];
    pdfBackup.href = dataFiles[0];
    projectVideo.src = 'images/LQR mp4.mp4'
    projectSummary.style.bottom=''
    projectSummary.style.width=''
    projectSummary.style.height=''
    projectSummary.style.left=''
}

function revealNbody() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both'
    projectInfocard.style.transition = 'animation .3s linear';
    var pdfBackup = document.getElementById('p-info-backup');
    pdfBackup.style.display='inline';

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    fullScreen.style.display = 'inline'
    exitfullscreen.style.display='none'

    rightButton.style.display = 'none'
    leftButton.style.display ='none'
    rightButton2.style.display = 'none'
    leftButton2.style.display ='none'


    projectPdf.style.display = 'inline';
   
    projectVideo.style.display = 'inline';
    slideShowone.style.display='none'
    slideShowtwo.style.display='none'

    projectTitle.innerHTML = 'N-body';
    projectSummary.innerHTML = 'Coded a scaling view of a simple n-body gravitational simulation utilizing leapfrog iterative method in Newtonian reference. I added a visible trail so we can better understand the trajectories of multi-massed gravitational systems. The video attached follows only one run of the simulator where there are nearly infinitely many different simulations possible.';
    projectPdf.data = dataFiles[1];
    pdfBackup.href = dataFiles[1];
    projectVideo.src = 'images/N-body mp4.mp4'
    projectSummary.style.bottom=''
    projectSummary.style.width=''
    projectSummary.style.height=''
    projectSummary.style.left=''
}

function revealMercury() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both'
    projectInfocard.style.transition = 'animation .3s linear'

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    var pdfBackup = document.getElementById('p-info-backup');
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    
    fullScreen.style.display = 'none'
    exitfullscreen.style.display='none'
    rightButton2.style.display = 'inline'
    leftButton2.style.display ='inline'
    rightButton.style.display = 'inline'
    leftButton.style.display ='inline'

    slideShowone.style.display='inline'
    slideShowtwo.style.display='inline'

    projectTitle.innerHTML = 'Mercury I, Mercury II, and Apollo 8 Missions';
    projectSummary.innerHTML = 'Built a model Mercury I and Mercury II rocket in a space flight simulation video game and accomplished the respective goals for each mission. Labeled screenshots of the built Mercury rockets show detailed design which was optimized for successful parameters of the simulated mission. The charts shown give the parameters and astronomical features of the mission showing satisfaction of general engineering requirements and design replications of Mercury I and II.';
    projectPdf.style.display = 'none';
    pdfBackup.style.display='none';
    projectVideo.style.display = 'none';
    projectPdf.data = '';
    pdfBackup.href = '';
    projectVideo.src = ''
    projectSummary.style.bottom=''
    projectSummary.style.width=''
    projectSummary.style.height=''
    projectSummary.style.left=''
}

function revealGimbal() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both'
    projectInfocard.style.transition = 'animation .3s linear';
    var pdfBackup = document.getElementById('p-info-backup');
    pdfBackup.style.display='inline';

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    fullScreen.style.display = 'inline'
    exitfullscreen.style.display='none'

    rightButton.style.display = 'none'
    leftButton.style.display ='none'
    rightButton2.style.display = 'none'
    leftButton2.style.display ='none'


    projectPdf.style.display = 'inline';
   
    projectVideo.style.display = 'inline';
    slideShowone.style.display='none'
    slideShowtwo.style.display='none'

    projectTitle.innerHTML = 'Pole Placed State Feedback Control Design for Simulated Dynamics of Base, Gimbal, Rotor';
    projectTitle.style.fontSize='25px'
    projectSummary.innerHTML = 'Designed a state feedback controller by linearizing a dynamical system and tuned the accuracy by placing the poles. Applying different negative eigenvalues and different equilibrium values allowed for different regimes of stability to drive the system to a desired state. Graphs of the time it takes to get to the desired state, angular velocity, and torque were compared for these different regimes with a clearly concluded best designed controller and engineering requirement analysis of the max torque. A report with full detailed analysis was created in LaTex following AIAA formatting and the video included showcases the simulation of controlled rotor angle.';
    projectPdf.data = dataFiles[2];
    pdfBackup.href = dataFiles[2];
    projectVideo.src = 'images/rotarvid.mp4'

    projectSummary.style.bottom=''
    projectSummary.style.width=''
    projectSummary.style.height=''
    projectSummary.style.left=''
}

function revealParachute() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both'
    projectInfocard.style.transition = 'animation .3s linear';
    var pdfBackup = document.getElementById('p-info-backup');
    pdfBackup.style.display='inline';

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    fullScreen.style.display = 'inline'
    exitfullscreen.style.display='none'

    rightButton.style.display = 'none'
    leftButton.style.display ='none'
    rightButton2.style.display = 'none'
    leftButton2.style.display ='none'


    projectPdf.style.display = 'inline';
   
    projectVideo.style.display = 'none';
    slideShowone.style.display='none'
    slideShowtwo.style.display='none'

    projectTitle.innerHTML = 'Parachute Assessment for Autonomous Mars Landing';
    projectTitle.style.fontSize='25px'
    projectSummary.style.bottom='8%'
    projectSummary.style.width='50%'
    projectSummary.style.height='62%'
    projectSummary.style.left='5%'
    projectSummary.innerHTML = 'Produced an aerodynamic analysis of parachutes with design oriented for Mars missions. I calculated Reynolds number and air speed for Earth testing in wind tunnel experiments and drag with modified coefficients to account for flow field. Fluid dynamical analysis and technical writing accompanied with calculation and engineering drawing.';
    projectPdf.data = dataFiles[3];
    pdfBackup.href = dataFiles[3];
    projectVideo.src = ''
}

function revealStress() {
    var projectInfocard = document.getElementById('project-info-card');
    projectInfocard.style.display = 'inline';
    projectInfocard.style.animation = '1.5s slideinleft 0s ease-out both'
    projectInfocard.style.transition = 'animation .3s linear';
    var pdfBackup = document.getElementById('p-info-backup');
    pdfBackup.style.display='inline';

    var projectTitle = document.getElementById('p-info-title');
    var projectSummary = document.getElementById('p-info-summary');
    var projectPdf = document.getElementById('p-info-pdf');
    
    var projectVideo = document.getElementById('project-video');
    var slideShowone = document.getElementById('slideshow-1')
    var slideShowtwo = document.getElementById('slideshow-2')
    var rightButton = document.getElementById('right')
    var leftButton = document.getElementById('left')
    var rightButton2 = document.getElementById('right-2')
    var leftButton2 = document.getElementById('left-2')
    var fullScreen = document.getElementById('full-screen');
    var exitfullscreen = document.getElementById('exit-full-screen')
    fullScreen.style.display = 'inline'
    exitfullscreen.style.display='none'

    rightButton.style.display = 'none'
    leftButton.style.display ='none'
    rightButton2.style.display = 'none'
    leftButton2.style.display ='none'


    projectPdf.style.display = 'inline';
   
    projectVideo.style.display = 'inline';
    slideShowone.style.display='none'
    slideShowtwo.style.display='none'

    projectTitle.innerHTML = 'Stress Strain Analysis for Aluminum and Steel';
    projectTitle.style.fontSize='25px'
    projectSummary.style.bottom=''
    projectSummary.style.width=''
    projectSummary.style.height=''
    projectSummary.style.left=''
    projectSummary.innerHTML = 'Lab tested aluminum and steel utilizing unixial stress and strain to find yield, onset necking, and failure points. Graphed the stress vs strain curve and calculated plastic deformation as well as ultimate tensile strength. The permanent deformation after plastic failure is shown in the aluminum video, representing applied material science in aerospace structures.';
    projectPdf.data = dataFiles[4];
    pdfBackup.href = dataFiles[4];
    projectVideo.src = 'images/IMG_0061 (1).mp4'
}

const fullScreen = () => {
    var projectInfocard = document.getElementById('project-info-card');
    var fullScreen = document.getElementById('full-screen')
    var exitfullscreen = document.getElementById('exit-full-screen')
    projectInfocard.style.animation='2s fullScreen ease forwards'
    fullScreen.style.display='none'
    exitfullscreen.style.display='inline'
  
}

const fullScreenexit = () => {
    var projectInfocard = document.getElementById('project-info-card');
    var fullScreen = document.getElementById('full-screen')
    var exitfullscreen = document.getElementById('exit-full-screen')
    projectInfocard.style.animation='2s fullScreenexit ease forwards'
    fullScreen.style.display='inline'
    exitfullscreen.style.display='none'
}

const right = () => {
    var slideShowone = document.getElementById('slideshow-1')
    slideShowone.scrollLeft += 495
}


const left = () => {
    var slideShowone = document.getElementById('slideshow-1')
    slideShowone.scrollLeft -= 495
}

const right2 = () => {
    var slideShowtwo = document.getElementById('slideshow-2')
    slideShowtwo.scrollLeft += 370
}


const left2 = () => {
    var slideShowtwo = document.getElementById('slideshow-2')
    slideShowtwo.scrollLeft -= 370
}

const dropDown = () => {
    var dropdownmenu = document.getElementById("dropdowm-menu")
    dropdownmenu.classList.toggle('animation1')
}

const slideUp = () => {
    var dropdownmenu = document.getElementById("dropdowm-menu")
    dropdownmenu.classList.toggle('animation2')
    setTimeout(function toggle() {
        dropdownmenu.classList.remove('animation2')
        dropdownmenu.classList.remove('animation1')
    }, 1200)
    
}

const pythonHover = () => {
    pythonBar = document.getElementById('bar-1');
    pythonBar.style.backgroundColor = '#E84A27'
    pythonBar.style.boxShadow = 'inset 0 0 10px black'
}

const pythonOut = () => {
    pythonBar = document.getElementById('bar-1');
    pythonBar.style.backgroundColor = ''
    pythonBar.style.boxShadow = ''
}

const nxHover = () => {
    nxBar = document.getElementById('bar-2');
    nxBar.style.backgroundColor = '#E84A27'
    nxBar.style.boxShadow = 'inset 0 0 10px black'
}

const nxOut = () => {
    nxBar = document.getElementById('bar-2');
    nxBar.style.backgroundColor = ''
    nxBar.style.boxShadow = ''
}

const latexHover = () => {
    latexBar = document.getElementById('bar-3');
    latexBar.style.backgroundColor = '#E84A27'
    latexBar.style.boxShadow = 'inset 0 0 10px black'
}

const latexOut = () => {
    latexBar = document.getElementById('bar-3');
    latexBar.style.backgroundColor = ''
    latexBar.style.boxShadow = ''
}

const matlabHover = () => {
    matlabBar = document.getElementById('bar-4');
    matlabBar.style.backgroundColor = '#E84A27'
    matlabBar.style.boxShadow = 'inset 0 0 10px black'
}

const matlabOut = () => {
    matlabBar = document.getElementById('bar-4');
    matlabBar.style.backgroundColor = ''
    matlabBar.style.boxShadow = ''
}

const raspberryHover = () => {
    raspBar = document.getElementById('bar-5');
    raspBar.style.backgroundColor = '#E84A27'
    raspBar.style.boxShadow = 'inset 0 0 10px black'
}

const raspberryOut = () => {
    raspBar = document.getElementById('bar-5');
    raspBar.style.backgroundColor = ''
    raspBar.style.boxShadow = ''
}

const solidworksHover = () => {
    solidworksBar = document.getElementById('bar-6');
    solidworksBar.style.backgroundColor = '#E84A27'
    solidworksBar.style.boxShadow = 'inset 0 0 10px black'
}

const solidworksOut = () => {
    solidworksBar = document.getElementById('bar-6');
    solidworksBar.style.backgroundColor = ''
    solidworksBar.style.boxShadow = ''
}

const allCourses = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='scroll'

    course1.style.display='flex'
    course2.style.display='flex'
    course3.style.display='flex'
    course4.style.display='flex'
    course5.style.display='flex'
    course6.style.display='flex'
    course7.style.display='flex'
    course8.style.display='flex'
    course9.style.display='flex'
    course10.style.display='flex'
    course11.style.display='flex'
    course12.style.display='flex'
    course13.style.display='flex'
    course14.style.display='flex'
    course15.style.display='flex'
    course16.style.display='flex'
    course17.style.display='flex'
    course18.style.display='flex'
    course19.style.display='flex'
    course20.style.display='flex' 
    course21.style.display='flex'
    course22.style.display='flex'
    course23.style.display='flex'
    course24.style.display='flex'

 }

const FA23 = () => {
   var course1 = document.getElementById('course-1')
   var course2 = document.getElementById('course-2')
   var course3 = document.getElementById('course-3')
   var course4 = document.getElementById('course-4')
   var course5 = document.getElementById('course-5')
   var course6 = document.getElementById('course-6')
   var course7 = document.getElementById('course-7')
   var course8 = document.getElementById('course-8')
   var course9 = document.getElementById('course-9')
   var course10 = document.getElementById('course-10')
   var course11 = document.getElementById('course-11')
   var course12 = document.getElementById('course-12')
   var course13 = document.getElementById('course-13')
   var course14 = document.getElementById('course-14')
   var course15 = document.getElementById('course-15')
   var course16 = document.getElementById('course-16')
   var course17 = document.getElementById('course-17')
   var course18 = document.getElementById('course-18')
   var course19 = document.getElementById('course-19')
   var course20 = document.getElementById('course-20')
   var course21 = document.getElementById('course-21')
   var course22 = document.getElementById('course-22')
   var course23 = document.getElementById('course-23')
   var course24 = document.getElementById('course-24')
   var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

   course1.style.display='flex'
   course2.style.display='flex'
   course3.style.display='flex'
   course4.style.display='flex'

   course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none'
    course21.style.display='none'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'
}

const SP23 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='flex'
    course6.style.display='flex'
    course7.style.display='flex'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none'
    course21.style.display='none'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'

 }

 const FA22 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='flex'
    course9.style.display='flex'
    course10.style.display='flex'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none'
    course21.style.display='none'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'


    
 }

 const SP22 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='flex'
    course12.style.display='flex'
    course13.style.display='flex'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none'
    course21.style.display='none'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'


    
 }

 const FA21 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='flex'
    course15.style.display='flex'
    course16.style.display='flex'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none' 
    course21.style.display='none'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'
    
 }

 const SP21 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='flex'
    course19.style.display='flex'
    course20.style.display='flex' 
    course21.style.display='flex'
    course22.style.display='none'
    course23.style.display='none'
    course24.style.display='none'

 }

 const FA20 = () => {
    var course1 = document.getElementById('course-1')
    var course2 = document.getElementById('course-2')
    var course3 = document.getElementById('course-3')
    var course4 = document.getElementById('course-4')
    var course5 = document.getElementById('course-5')
    var course6 = document.getElementById('course-6')
    var course7 = document.getElementById('course-7')
    var course8 = document.getElementById('course-8')
    var course9 = document.getElementById('course-9')
    var course10 = document.getElementById('course-10')
    var course11 = document.getElementById('course-11')
    var course12 = document.getElementById('course-12')
    var course13 = document.getElementById('course-13')
    var course14 = document.getElementById('course-14')
    var course15 = document.getElementById('course-15')
    var course16 = document.getElementById('course-16')
    var course17 = document.getElementById('course-17')
    var course18 = document.getElementById('course-18')
    var course19 = document.getElementById('course-19')
    var course20 = document.getElementById('course-20')
    var course21 = document.getElementById('course-21')
    var course22 = document.getElementById('course-22')
    var course23 = document.getElementById('course-23')
    var course24 = document.getElementById('course-24')
    var courses = document.getElementById('courses')
    courses.style.overflowY='hidden'

    course1.style.display='none'
    course2.style.display='none'
    course3.style.display='none'
    course4.style.display='none'
    course5.style.display='none'
    course6.style.display='none'
    course7.style.display='none'
    course8.style.display='none'
    course9.style.display='none'
    course10.style.display='none'
    course11.style.display='none'
    course12.style.display='none'
    course13.style.display='none'
    course14.style.display='none'
    course15.style.display='none'
    course16.style.display='none'
    course17.style.display='none'
    course18.style.display='none'
    course19.style.display='none'
    course20.style.display='none' 
    course21.style.display='none'
    course22.style.display='flex'
    course23.style.display='flex'
    course24.style.display='flex'

 }
   
 
window.addEventListener("resize", function() {
checkWidth()
} )

const checkWidth =() => {
    if(window.innerWidth<=428){
        var Box1 = document.getElementById('box-1')
        return Box1.onmouseout='', 
       
        console.log(Box1.onmouseout)
        
    }else{
        return
    }
}

