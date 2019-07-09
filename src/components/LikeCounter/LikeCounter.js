import React, {Component} from 'react';
import '../LikeCounter/LikeCounter.css';

class LikeCounter extends Component {

    //props: likeCount, updateLikes, itemId

    render() {

        let likeText;

        if (this.props.likeCount === 0) {
            likeText = <span>- be the first to like this -</span>
        } else if (this.props.likeCount === 1) {
            likeText = <span>- 1 like -</span>
        } else {
            likeText = <span>- {this.props.likeCount} likes -</span>
        }

        return (
            <div>
                <img onClick={() => this.props.updateLikes(this.props.itemId)}
                    src="images/heart-icon.png" alt="like button"/>
                <p className="likeCount">{likeText}</p>
            </div>
        )
    }
}

export default LikeCounter;