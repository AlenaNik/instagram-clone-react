import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../Services/InstaService';
export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }
        componentDidMount() {

        }

    render() {
        return (
            <div className="left">
               <Post src="https://cdni.rbth.com/rbthmedia/images/all/2017/05/28/russia_selfie.jpg"/>
                <Post src="https://cdni.rbth.com/rbthmedia/images/all/2017/05/28/russia_selfie.jpg"/>
            </div>
        );
    }
}
