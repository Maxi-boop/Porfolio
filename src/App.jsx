import ScrollingText from './components/ScrollingText'
import SvgAnimation from './components/SvgAnimation';
import StackingCards from './components/StackingCards';
import Alert from './components/Alert';
import Projects from './components/projects/Projects';

import './App.css';

export default function App(){
  const scrollingTextAnimationPropsName = {
    backgroundStyle: {height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"},
    textStyle: {fontSize: "100vh"}
  }
  const scrollingTextAnimationPropsIcons ={
    backgroundStyle: {display: "flex", alignItems: "baseline"},
    textStyle: {scale: "2", marginRight: "2rem", display: "flex", alignSelf: "center"}
  }

  const svgAnimationPropsJumpingArrow = {
    alt: "svgBouncingArrow", 
    styles:
       {position: "absolute", 
        bottom: "5%", 
        display: "flex", 
        justifyContent: "center",
        width: "100%",
        "--scalefactor": 5,
        overflow: "hidden"
      },
    animationType: "bounce"
  }

  return(
    <div className="mainPage">
      <Alert alertType="construction">
        This site is under maitenence. Connection via the navegation bar, footer, and contact form 
        are closed temporarily as we resolve some issues.
      </Alert>
      <Alert alertType="mobile">
        We are fixing mobile glitches. I'm sorry for the inconvenience.
      </Alert>
      <header style={{position: 'relative'}}>
        <div className="scrollingTextSectionWithName">
          <ScrollingText {...scrollingTextAnimationPropsName}>
            <>MAX</>
          </ScrollingText>
        </div>
        <div className="jumpingArrow">
          <SvgAnimation {...svgAnimationPropsJumpingArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
            </svg>
          </SvgAnimation>
        </div>
      </header>
      <main className="mainSection">
        <div className="scrollingTextSectionWithSvgIconsCssHtmlJsx">
          <ScrollingText {...scrollingTextAnimationPropsIcons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-jsx" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-scss" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.356 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m4.274-2.23a1.7 1.7 0 0 0-.103.633v.495q0 .369.103.627a.83.83 0 0 0 .298.392.85.85 0 0 0 .478.132.9.9 0 0 0 .401-.088.7.7 0 0 0 .273-.249.8.8 0 0 0 .117-.363h.765v.076a1.27 1.27 0 0 1-.226.674 1.4 1.4 0 0 1-.55.454 1.8 1.8 0 0 1-.786.164q-.54 0-.914-.217a1.4 1.4 0 0 1-.571-.626q-.195-.408-.194-.976v-.498q0-.569.197-.979a1.44 1.44 0 0 1 .57-.633q.38-.222.912-.222.328 0 .607.097.28.093.489.272a1.32 1.32 0 0 1 .466.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.8.8 0 0 0-.398-.097.8.8 0 0 0-.475.138.87.87 0 0 0-.301.398m2.609 1.781a1.13 1.13 0 0 0 .401.823q.193.162.478.252.284.091.665.091.507 0 .858-.158.354-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.62-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.213 0 .369.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.438 0-.776.15-.336.149-.527.421-.19.273-.19.639 0 .302.123.524t.351.367q.228.143.54.213l.617.144q.311.073.463.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193 1.1 1.1 0 0 1-.413.07q-.177 0-.32-.04a.8.8 0 0 1-.249-.115.58.58 0 0 1-.255-.384zm3.502.449a1.2 1.2 0 0 1-.11-.449h.764a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.152-.326q-.153-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.54-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.458 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.512.152a.47.47 0 0 0-.185.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.326.075.566.211t.375.358.135.56q0 .37-.187.656a1.2 1.2 0 0 1-.54.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
              <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
              <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </ScrollingText>
        </div>
        <hr></hr>

        <article className="aboutMe" style={{margin: "1rem"}}>
          <section className="basicInfo">
            <h1 id="mainText-aboutMe">Hey <span id="emojiWavingAnimation">👋</span>! I'm Max a front-end developer</h1>
            <p id="mainText-description">
              I am a front-end developer specialized in React.js. I am frequently working with many CSS libraries and
              trying out preprocessors like SASS. Keep scrolling to learn more.
            </p>
          </section>
          <section className="image">
            <img src="" alt="" />
          </section>
        </article>

        <br />

        <StackingCards>
          <div>
            <section>
              <h1>React.js</h1>
              <p>React.js is the primary JavaScript library that I use frequently.
                I'm currently still working to perfect my React skills, especially with 
                React's poor (S)CSS incorperation. 
              </p>
              <div className="buttons">
                <button style={{backgroundColor: "#ff9d9d"}}>Three.js (Experemental)</button>
                <button>Formik</button>
                <button>Bootstrap</button>
                <button>Pico.css</button>
              </div>
            </section>
            <section>
              <img id="reactlogo-stackingCards" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Freact-logo.png&f=1&nofb=1&ipt=e7fc3fbaa60593c28e625ade78e6c07c8a3a0098aa28a106a303e715d8b49a25&ipo=images" alt="react logo" width="100%" height="auto"/>
            </section>
          </div>

          <div>
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 480L21.5 469C43 458 86 436 128.8 435C171.7 434 214.3 454 257.2 469.5C300 485 343 496 385.8 497.2C428.7 498.3 471.3 489.7 514.2 483.8C557 478 600 475 642.8 480C685.7 485 728.3 498 771.2 500.3C814 502.7 857 494.3 878.5 490.2L900 486L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#8eb1fe" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
            <section>
              <h1>CSS</h1>
              <p>I usually use vanilla CSS for my projects.. However, I developed simple apps
                with different CSS libraries such as Bootstrap and Pico. Additionally,
                I'm working on enhancing my Sass and Post.css skills to make my projects
                more responsive. 
              </p>
              <div className="buttons">
                <button>Bootstrap</button>
                <button>Pico.css</button>
                <button style={{backgroundColor: "#ff9d9d"}}>Post.css (Experemental)</button>
                <button style={{backgroundColor: "#ff9d9d"}}>SASS (SCSS, Experemental)</button>
              </div>
            </section>
            <section>

            </section>
          </div>
          <div>
          <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 480L21.5 469C43 458 86 436 128.8 435C171.7 434 214.3 454 257.2 469.5C300 485 343 496 385.8 497.2C428.7 498.3 471.3 489.7 514.2 483.8C557 478 600 475 642.8 480C685.7 485 728.3 498 771.2 500.3C814 502.7 857 494.3 878.5 490.2L900 486L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#FFF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
          <section>
            <h1>Connect with Git</h1>
            <p>I use Github for projects where I need to collaborate with others. 
              I have knowledge of fundemental commands, prompts, etc. 
            </p>
            <div className="buttons">
              <button>GitHub</button>
              <button>Git</button>
            </div>
          </section>
          <section>

          </section>
          </div>

        </StackingCards>
        <div className="projects">
          <div className="blackWaveTransition">
          <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 472L17.8 474.2C35.7 476.3 71.3 480.7 106.8 469.3C142.3 458 177.7 431 213.2 415C248.7 399 284.3 394 320 395.5C355.7 397 391.3 405 426.8 418.7C462.3 432.3 497.7 451.7 533.2 465.3C568.7 479 604.3 487 640 480.2C675.7 473.3 711.3 451.7 746.8 438.3C782.3 425 817.7 420 853.2 424.2C888.7 428.3 924.3 441.7 942.2 448.3L960 455L960 541L942.2 541C924.3 541 888.7 541 853.2 541C817.7 541 782.3 541 746.8 541C711.3 541 675.7 541 640 541C604.3 541 568.7 541 533.2 541C497.7 541 462.3 541 426.8 541C391.3 541 355.7 541 320 541C284.3 541 248.7 541 213.2 541C177.7 541 142.3 541 106.8 541C71.3 541 35.7 541 17.8 541L0 541Z" fill="#000" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
          </div>
          {Projects([])}
          </div>        

        
      </main>
    </div>
  );
}