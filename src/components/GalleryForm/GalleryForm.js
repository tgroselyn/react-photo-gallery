import React, {Component} from 'react';
import '../GalleryForm/GalleryForm.css';

class GalleryForm extends Component {

    //props: addImage

    state = {
        newImage: {
            path: '',
            description: ''
        }
    }

    handleChangeFor = (property) => {
        return (event) => {
            this.setState({
                newImage: {
                    ...this.state.newImage,
                    [property]: event.target.value
                }
            })
        }
    } //end handleChangeFor

    handleSubmit = (event) => {
        //prevent page refresh
        event.preventDefault();
        //call POST function on parent
        this.props.addImage(this.state.newImage);
        //clear inputs
        this.setState({
            newImage: {
                path: '',
                description: ''
            }
        });
    } //end handleSubmit

    render() {
        return (
            <div className="galleryForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Image URL"
                        value={this.state.newImage.path}
                        onChange={this.handleChangeFor('path')} />
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Image Description"
                        value={this.state.newImage.description}
                        onChange={this.handleChangeFor('description')} />
                    <button
                        className="formButton" type="submit">add to gallery
                    </button>
                </form>
            </div>
        )
    }
} //end render

export default GalleryForm;