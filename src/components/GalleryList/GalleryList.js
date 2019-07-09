import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import '../GalleryList/GalleryList.css';

class GalleryList extends Component {

    //props: gallery, updateLikes, deleteImage

    render() {

        let galleryItem = this.props.gallery.map(item => {
            return <GalleryItem
                key={item.id}
                item={item}
                updateLikes={this.props.updateLikes}
                deleteImage={this.props.deleteImage}
            />
        })

        return (
            <div className="GalleryList">
                <ul>
                    {galleryItem}
                </ul>
            </div>
        )
    }
}

export default GalleryList;