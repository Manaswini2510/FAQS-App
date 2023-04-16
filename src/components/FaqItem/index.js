import React,{Component} from 'react'

import './index.css'

const plus_image = "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const minus_image = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"

class FaqItem extends  Component{
    state = {isActive : false}

    renderActiveImage = () =>{
        const {isActive} = this.state
        const image = isActive ? minus_image : plus_image
        const altText = isActive ? "minus" : "plus"
        
        return(
            <button className='button' onClick={this.onToggleAnswer}>
                <img src={image} alt={altText}/>
            </button>
        )
    }

    onToggleAnswer = () =>{
        this.setState(prevState =>({
            isActive : !prevState.isActive
        }))
    }

    renderAnswer = () =>{
        const {faqData} = this.props
        const {answerText} = faqData
        const {isActive} = this.state
        if(isActive){
            return(
                <div>
                    <hr className='horizontal'/>
                    <p className='answer'>{answerText}</p>
                </div>
            )
        }
        return null
    }

    render(){
        const {faqData} = this.props
        const {questionText} = faqData

        return(
            <div className='container'>
            <li className='listItem'>
                <div className='question-box'>
                    <h1 className='questionText'>{questionText}</h1>
                    {this.renderActiveImage()}
                </div>
                {this.renderAnswer()}
            </li>
            </div>
        )
    }
}


export default FaqItem
