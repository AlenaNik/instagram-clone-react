
import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render () {
        return (
            <div className="left">
                <Post alt="penguin" src="https://cdn.shopify.com/s/files/1/1192/7874/files/Minimalist_Living._How_to_declutter_your_life_2048x2048.jpg?v=1529470522" />
                <Post alt="abstract" src="https://www.psychbytes.com/wp-content/uploads/2017/10/AdobeStock_17684354353535345382754.jpeg" />
            </div>
        );
    }
}


/* FROM THE SECOND DAY OF WORKSHOP
import React, {Component} from 'react';
import User from './User';
import InstaService from '../Services/InstaService';
import ErrorMassage from '../Components/ErrorMassage'
export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    };
        componentDidMount() {
        this.updatePosts();
        }

       updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
       }
        onPostsLoaded = (posts) => {
                this.setState({
                    posts,
                    error: false
                })
        };

        onError = (err) => {
        this.setState({
            error: true
        })
        };

        renderItems(arr) {
            return arr.map((item) => {
                const {name, altname, photo, src, alt, descr, id} = item;

                return (
                    <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                    <img src={src} alt={alt}></img>
                <div className="post__name">
                   {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
                    </div>
                )
            })
        }
    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMassage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        );
    }
}
*/
