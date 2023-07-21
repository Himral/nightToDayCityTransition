import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import build from './build.png'
import moon from './moon.png'
import build_day from './build_day.png'
import sun from './sun.png'
import bird from './birds.png'
import cloud from './cloud.png'
function App() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax pages = {2}>
        
        <ParallaxLayer 
        factor={4}
        offset = {0.5}
        speed = {0.25}
        style = {{
          display : "flex"
        }}
        >
          <p className='text'>Parallax Scrolling!</p>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundColor: "#394867",
          backgroundSize: 'cover',
        }} 
        >
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0}
        speed={0.25}
        style={{
          display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop : '60px',
        }} 
        >
        <img src = {build}style={{ width: '100%' ,height: '100%' }}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.25 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0}
        speed={0.75}
        style={{
          display : 'block',
          marginTop : '10%',
          marginLeft : '5%',
        }} 
        >
        <img src = {moon}style={{ width: '7%' }}/>
        
        </ParallaxLayer>

        <ParallaxLayer 
        offset={1}
        speed={0.5}
        factor={3}
        style={{
          backgroundImage: "url(/morn_sky.jpeg)",
          backgroundSize: 'cover',
        }} 
        >
        </ParallaxLayer>

        <ParallaxLayer 
        offset={0}
        speed={-0.25}
        style={{
          display : 'block',
          marginTop : '40%',
          marginLeft : '5%',
        }} 
        >
        <img src = {sun}style={{ width: '5%' }}/>
        </ParallaxLayer>
       


        <ParallaxLayer 
        offset={1}
        speed={0.35}
        
        style={{
          display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop : '60px',
        }} 
        >
        <img src = {build}style={{ width: '100%' }}/>
        
        </ParallaxLayer>
        
        <ParallaxLayer 
        horizontal = {true}
        offset={1}
        speed={-0.25}
        
        style={{
            display : 'block',
            marginTop : '45%',
            marginLeft : '15%',
        }} 
        >
        <img src = {bird}style={{ width: '15%' }}/>
        
        </ParallaxLayer>
        <ParallaxLayer 
        horizontal = {true}
        offset={1}
        speed={-0.15}
        
        style={{
            display : 'block',
            marginTop : '50%',
            marginLeft : '5%',
        }} 
        >
        <img src = {bird}style={{ width: '20%' }}/>
        
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
