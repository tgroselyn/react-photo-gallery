import React, {Component} from 'react';
import LikeCounter from '../LikeCounter/LikeCounter';
import '../GalleryItem/GalleryItem.css';

class GalleryItem extends Component {

    //props: item, updateLikes, deleteImage

    state = {
        flipped: false
    }

    flipImage = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    handleDelete = (idToDelete) => {
        this.props.deleteImage(idToDelete);
    }

    render() {

        let renderedItem;

        if (!this.state.flipped) {
            renderedItem =
                <div className="innerItem">
                    <img className="innerImg" onClick={this.flipImage} src={this.props.item.path} alt={this.props.item.description} />
                {/* <img className="deleteBtn" src="images/delete.png" alt="delete"/> */}
                </div>
        } else {
            renderedItem =
                <div className="innerItem" onClick={this.flipImage}>
                <p className="innerText">{this.props.item.description}</p>
                <button
                    className="innerDel"
                    onClick={() => this.handleDelete(this.props.item.id)}>
                    delete image</button>
                </div>
        }

        return (
            <li>
                <div className="galleryItem">
                    {renderedItem}
                    <LikeCounter
                        likeCount={this.props.item.likes}
                        updateLikes={this.props.updateLikes}
                        itemId={this.props.item.id}
                    />
                </div>
            </li>
        )
    }
}

export default GalleryItem;