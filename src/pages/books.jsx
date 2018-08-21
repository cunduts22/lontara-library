import React, { Component } from 'react'
import { BookCard } from '../components/books'


export default class Books extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainPages: 2,
            nextPages: 3,
            prevPages: 1,
            active: false,
            loading: true
        }
    }
    componentDidMount() {
        this.props.onFetchBooks(1)
    }

    prevPages() {
        this.setState({
            loading: true
        })
        if (this.state.prevPages !== 1) {
            this.props.onFetchBooks(this.state.prevPages)
            this.setState({
                prevPages: this.state.prevPages - 1,
                nextPages: this.state.nextPages - 1,
                mainPages: this.state.mainPages - 1
            })
        }
        if (this.state.prevPages === 1)
            this.setState({
                active: false
            }, () => this.props.onFetchBooks(1))


    }

    nextPages() {
        this.setState({
            loading: true
        })
        if (this.props.books.length > 0) {
            this.props.onFetchBooks(this.state.nextPages)
            this.setState({
                nextPages: this.state.nextPages + 1,
                prevPages: this.state.prevPages + 1,
                mainPages: this.state.mainPages + 1
            })
        }
    }


    mainPages() {
        this.setState({
            loading: true
        })
        this.props.onFetchBooks(this.state.mainPages)
        if (this.state.prevPages === 1)
            this.setState({
                active: false
            })

        this.setState({
            active: true
        })
    }

    render() {
        const { active, mainPages, prevPages, nextPages, loading } = this.state
        return (
            <div className="card">
                <div className="card-header">
                    <input type="text" className="form-control" placeholder={'find books'}/>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className={!active ? 'page-item active' : 'page-item'}><a className="page-link" href="javascript:void(0)" onClick={this.prevPages.bind(this)}>{prevPages}</a></li>
                                <li className={active ? 'page-item active' : 'pages-item'}><a className="page-link" href="javascript:void(0)" onClick={this.mainPages.bind(this)}>{mainPages}</a></li>
                                <li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={this.nextPages.bind(this)}>{nextPages}</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                    {
                        this.props.books ? this.props.books.map(data => {
                            return <BookCard key={data._id} {...data} />
                        }) : null
                    }
                    </div>
                </div>
            </div>
        )
    }
}
