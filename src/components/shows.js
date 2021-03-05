import React from 'react'
import NeonHeader from './text.js';
import Artist from './show.js';
import showData from '../show.json';
import LightBar from './light_bar.js';

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.ROWS = 5
        this.SHOWS_PER_PAGE = this.ROWS * 4;
        this.state = {
            maxPageCount: Math.floor(1 + (this.getShowCount()/this.SHOWS_PER_PAGE)),
            page: 1
        };
        this.PageNav = this.PageNav.bind(this);
        this.getLeftNumbers = this.getLeftNumbers.bind(this);
        this.getRightNumbers = this.getRightNumbers.bind(this);
    }
    displayDots() {
                return(  
                    <div className="header-cont">
                        <svg className="headerlayer1" width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.35599 0.0888672C6.59036 0.0888672 5.97057 0.708659 5.97057 1.47428C5.97057 2.23991 6.59036 2.8597 7.35599 2.8597C8.12161 2.8597 8.74141 2.23991 8.74141 1.47428C8.74141 0.708659 8.12161 0.0888672 7.35599 0.0888672ZM1.7487 0.0888672C0.983073 0.0888672 0.363281 0.708659 0.363281 1.47428C0.363281 2.23991 0.983073 2.8597 1.7487 2.8597C2.51432 2.8597 3.13411 2.23991 3.13411 1.47428C3.13411 0.708659 2.51432 0.0888672 1.7487 0.0888672ZM12.9779 0.0888672C12.2122 0.0888672 11.5924 0.708659 11.5924 1.47428C11.5924 2.23991 12.2122 2.8597 12.9779 2.8597C13.7435 2.8597 14.3633 2.23991 14.3633 1.47428C14.3633 0.708659 13.7435 0.0888672 12.9779 0.0888672Z" fill="white"/>
                        </svg>
                        <svg className="headerlayer2" width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.35599 0.0888672C6.59036 0.0888672 5.97057 0.708659 5.97057 1.47428C5.97057 2.23991 6.59036 2.8597 7.35599 2.8597C8.12161 2.8597 8.74141 2.23991 8.74141 1.47428C8.74141 0.708659 8.12161 0.0888672 7.35599 0.0888672ZM1.7487 0.0888672C0.983073 0.0888672 0.363281 0.708659 0.363281 1.47428C0.363281 2.23991 0.983073 2.8597 1.7487 2.8597C2.51432 2.8597 3.13411 2.23991 3.13411 1.47428C3.13411 0.708659 2.51432 0.0888672 1.7487 0.0888672ZM12.9779 0.0888672C12.2122 0.0888672 11.5924 0.708659 11.5924 1.47428C11.5924 2.23991 12.2122 2.8597 12.9779 2.8597C13.7435 2.8597 14.3633 2.23991 14.3633 1.47428C14.3633 0.708659 13.7435 0.0888672 12.9779 0.0888672Z" fill="white"/>
                        </svg>
                        <svg className="headerlayer3" width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.35599 0.0888672C6.59036 0.0888672 5.97057 0.708659 5.97057 1.47428C5.97057 2.23991 6.59036 2.8597 7.35599 2.8597C8.12161 2.8597 8.74141 2.23991 8.74141 1.47428C8.74141 0.708659 8.12161 0.0888672 7.35599 0.0888672ZM1.7487 0.0888672C0.983073 0.0888672 0.363281 0.708659 0.363281 1.47428C0.363281 2.23991 0.983073 2.8597 1.7487 2.8597C2.51432 2.8597 3.13411 2.23991 3.13411 1.47428C3.13411 0.708659 2.51432 0.0888672 1.7487 0.0888672ZM12.9779 0.0888672C12.2122 0.0888672 11.5924 0.708659 11.5924 1.47428C11.5924 2.23991 12.2122 2.8597 12.9779 2.8597C13.7435 2.8597 14.3633 2.23991 14.3633 1.47428C14.3633 0.708659 13.7435 0.0888672 12.9779 0.0888672Z" fill="white"/>
                        </svg>
                    </div>
                )  ;
    }
    displayArrow(isLeft)
    {
        if ((this.state.page === '1' && isLeft) || (this.state.page === this.state.showCount && !isLeft))
            return;
        else {
            if (isLeft) {
                return(
                    <div className="header-cont" onClick={() => {this.setState({page: this.state.page - 1});}}>
                        <svg  className="headerlayer1" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00391 1.07031L1.94038 8.01207L8.88393 15.0703" stroke="white" strokeWidth="2"/>
                        </svg>
                        <svg  className="headerlayer2" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00391 1.07031L1.94038 8.01207L8.88393 15.0703" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
    
                )
            } else {
                return(
                    <div className="header-cont" onClick={() => {this.setState({page: this.state.page + 1});}}>
                        <svg className="headerlayer1" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.941406 1.07031L8.00494 8.01207L1.06138 15.0703" stroke="white" strokeWidth="2"/>
                        </svg>
                        <svg className="headerlayer2" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.941406 1.07031L8.00494 8.01207L1.06138 15.0703" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                );
            }
        }
    }
    displayCurrentPage() {
        return(
            <NeonHeader content={this.state.page}/>
        );
    }
    getLeftNumbers() {
        let bottomRange = 1;
        if (this.state.page > 4)
            bottomRange = this.state.page - 2;
        let topRange = this.state.page - 1;
        let bottomArr = [];
        for (let i = bottomRange; i <= topRange; i++)
            bottomArr.push(i);
        return bottomArr;
    }
    getRightNumbers() {
        let topRange = parseInt(this.state.maxPageCount);
        if (this.state.page < (this.state.maxPageCount - 3))
            topRange = parseInt(this.state.page) + 2;
        let bottomRange = parseInt(this.state.page) + 1;
        var topArr = []
        for (let i = bottomRange; i <= topRange; i++)
            topArr.push(i);
        return topArr;
    }
    PageNav() {
        var botArr = this.getLeftNumbers();
        var topArr = this.getRightNumbers();
        return(
            <div>
                <LightBar width='100%'/>
                <nav className="pageNav">
                    {(this.state.page > 1) ? this.displayArrow(true) : null}
                    {(this.state.page > 4) ? <NeonHeader content='1'/>: null}
                    {(this.state.page > 4) ? this.displayDots(true) : null}
                    {botArr.map((v, i) => { return(<div key={i} onClick={() => {this.setState({page: v})}}><NeonHeader content={v}/></div>)})}
                    <NeonHeader color="red" content={this.state.page}/>
                    {topArr.map((v, i) => { 
                        return(<div key={i} onClick={() => {this.setState({page: v})}}><NeonHeader content={v}/></div>);
                    })}
                    {(this.state.page < (this.state.maxPageCount - 3)) ? this.displayDots(true): null}
                    {(this.state.page < (this.state.maxPageCount - 3)) ? <NeonHeader content={this.state.maxPageCount}/>: null}
                    {(this.state.page < this.state.maxPageCount) ? this.displayArrow(false): null}
                </nav>
                <LightBar width='100%'/>
            </div>
        );
    }
    render() {
        console.log(this.state.maxPageCount);
        return(
            <div className="body-cont">

                <div className="shows-cont">
                    {showData.Shows.filter((show, index) => {
                        return((index >= ((this.state.page * this.SHOWS_PER_PAGE) - this.SHOWS_PER_PAGE)) && (index < (this.state.page * this.SHOWS_PER_PAGE))); 
                    }).map((show, index) => {
                          return(
                              <Artist key={index} {...show}/>
                          )
                    })}
                </div>
                {(this.state.maxPageCount > 1) ? this.PageNav(): null}
            </div>
        )
    }
    getShowCount() {
        return(22);
    }
}

export default Shows;