import './windowsCSS.css';
import './assets/minimize.svg'
import selfie from './assets/0P5A3j301.jpg';

const Windows = () => {
    window.addEventListener('load', () => {
        const tabButtons = document.querySelectorAll(`.tabs--pills .btn`)
        const tabContents = document.querySelectorAll(`.tabs--panels > div`)

        if (tabButtons && tabContents) {
            tabButtons.forEach((tabBtn) => {
                tabBtn.addEventListener("click", () => {
                    const tabId = tabBtn.getAttribute("data-id");
                    tabButtons.forEach((btn) => btn.classList.remove('active'));
                    tabBtn.classList.add('active');

                    tabContents.forEach((content) => {
                        content.classList.remove('active');

                        if (content.id === tabId) {
                            content.classList.add('active');
                        }
                    });
                });
            });
        }
    });

    return (<div className="windowsContainer">
        <div className="windows--windowMain">
            <div className="windows--titleBar">
                <span className="windows--titleBarText">Sarah Fildes // Portfolio</span>
                <div className="windows--titleBarControls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>


            <div className="windows--contentContainer">
                <div className="windows--creatorPane">
                    <div className="windows--creatorPaneContent">
                        <img src={selfie} className="windowSelfie" alt="picture"/>
                        <div className="windows--creatorInfo">
                            Sarah Fildes <span className="windows--creatorStatus">(Available)</span>
                            <div className="windows--creatorStatus">{`< looking for work >`}</div>
                        </div>
                    </div>
                </div>
                <div className="windows--browserPane">
                    <div className="tabs">
                        <div className="tabs--pills">
                            <button className="btn active" data-id="about">
                                about
                            </button>
                            <button className="btn" data-id="projects">
                                projects
                            </button>
                            <button className="btn" data-id="other">
                                other
                            </button>
                        </div>
                        <div className="tabs--panels">
                            <div id="about" className="active">
                                Sarah Fildes, software engineer with experience in Javascript with React.
                                <br/><br/>
                                email: devfildes@gmail.com
                            </div>
                            <div id="projects">Updating soon!</div>
                            <div id="other">other page</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Windows;