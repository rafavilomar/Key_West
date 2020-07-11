import React from 'react'
import { Width, Height } from '../pages/contexts'
import { generateContainerStyle } from './styles'

const Fact = (props) => {
    let styles = getStyles(Width(), props.color, props.imgDir)
    return ( 
      <div style={styles.main}>
          <img src={props.url} style={styles.img}/>
          <div style={styles.content}>
            <h3 style={styles.title}>{props.factType}</h3>
            <p style={styles.para}>{props.content}</p>
            <a href={props.href} style={styles.link}>More details</a>
          </div>
      </div> 
    )
}

const getStyles = (width, bgColor, imgDir) => {
    let output = {
        img: {
            position: 'absolute',
            width: 'auto',
            height: '50vh',
            borderRadius: '20vh'
        },
        content: {
            position: 'absolute'
        },
        title: {
            fontSize: '1.7rem',
            color: '#aaccff',
            margin: '0 0 2% 0',
            fontFamily: 'Ubuntu, sans-serif'
        },
        para: {
            fontSize: '1.3rem',
            color: '#aaaaff',
            fontFamily: 'Abel, sans-serif',
            marginBottom: '1vh'
        },
        link: {
            fontSize: '1.2rem',
            color: '#ddddff',
            textDecoration: 'none',
            fontFamily: 'Oxygen, sans-serif'
        }
    }
    if(imgDir === 'right') {
        output.img.right =  '-5%'
        output.img.top = '-5vh'
    } else {
        output.img.left =  '-5%'
        output.img.top = '-5vh'
    }
    output.main = generateContainerStyle(0, 0.1)
    output.main.backgroundColor = bgColor//'#0e0770d5'
    output.main.height = '40vh'
    output.main.margin = '0 0 15vh 0'
    if(width < 950) {
        output.main.margin = '20vh 0 0 0'
        output.img.left = '30%'
        output.img.top = '-10vh'
        output.img.width = '40%'
        output.main.height = '75vh'
        output.title.fontSize = '1.2rem'
        output.para.fontSize = '1rem'
        if(width < 600) {
            output.img.width = '64%'
            output.img.left = '18%'
            output.main.height = '60vh'
        }
        output.img.height = 'auto'
        output.content.bottom = '10%'
        output.content.width = '70%'
        output.content.left = '15%'
        if(Height() < 500){
            output.title.fontSize = '1.2rem'
            output.para.fontSize = '1rem'
            output.img.width = '40%'
            output.img.left = '30%'
            output.main.height = '80vh'
        }
        return output
    }
    imgDir === 'right'? output.content.left = '5%': output.content.right = '5%'
    output.content.top = '20%'
    output.content.width = '40%'
    return output
}

export default Fact