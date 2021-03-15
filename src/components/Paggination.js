import React from 'react'


class Paggination extends React.Component {
    paggination=()=>{
        let firstLinkArr=[]
        let secondLinkArr=[]
        for(let i=1;i<Math.round(this.props.pageNumProp.length/1);i++){
            firstLinkArr.push(<li key={i} onClick={this.props.pagginationSortProp} className="page-item"><a className="page-link" href="#a">{i}</a></li>)
        }
        if(firstLinkArr.length>5){
            secondLinkArr.push(firstLinkArr[0],
                               firstLinkArr[Math.round(((firstLinkArr.length-1)/2)-1)],
                               firstLinkArr[Math.round((firstLinkArr.length-1)/2)],
                               firstLinkArr[Math.round(((firstLinkArr.length-1)/2)+1)],
                               firstLinkArr[firstLinkArr.length-1])
            return secondLinkArr
        }
        else{
            return firstLinkArr
        }
    }

    render() {
        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#a" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {
                          this.paggination()
                        }
                        <li className="page-item">
                            <a className="page-link" href="#a" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Paggination
