import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';
import CheckList from './CheckList';
import ReactModal from 'react-modal';
import Markdown from 'react-markdown';

import { 
    NoteWrapper, 
    NoteNav,
    NoteContent, 
    NoteButton, 
    ModalWrapper, 
    ModalContent, 
    ModalButtons, 
    Buttons 
} from '../style';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render () {
        const note = this.props.notes.find( note  => { return this.props.match.params.id === `${note._id}`})
            console.log(note)
        return (
            <NoteWrapper>
                <MobileNav/>
                <NoteNav>
                    <NavLink to={`/edit-note/${note._id}`} className='note-button'> Edit </NavLink>
                    <NoteButton  onClick={() => {this.toggleModal()}}  className='note-button'>Delete</NoteButton> 
                 </NoteNav>
                 <NoteContent>
                    <h2>{note.title}</h2>
                    
                    <Markdown source={note.textBody}/>
                 
               
                <CheckList />
                </NoteContent>
                    <ReactModal className='ReactModal' isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                        <ModalWrapper onClick={this.handleCloseModal}>
                            <ModalContent>
                                    Are you sure you want to delete this?
                                <ModalButtons>
                                    <Buttons delete onClick={() => { this.props.delete(this.props.match.params.id); this.props.history.push('/')}}>
                                        Delete
                                    </Buttons>
                                    <Buttons onClick={() => {this.toggleModal()}} >No</Buttons>
                                </ModalButtons>
                            </ModalContent>
                        </ModalWrapper>
                    </ReactModal>
            </NoteWrapper>
        );        
     }
}
export default Note