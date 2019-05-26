import React, {Component} from 'react';
import User from './User';
class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                alt="prince"
                name="Prince_Harry"
                min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Lorem User
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis debitis deleniti dicta dolores enim error et eveniet exercitationem expedita explicabo id in laboriosam, mollitia, placeat quae repellendus voluptate voluptatum!
                </div>
            </div>
        );
    }
}

export default Post;