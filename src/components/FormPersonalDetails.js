import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FromPersonalDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWigth="sm"
                    >
                        <AppBar title="Enter Personal Details" />
                        <TextField
                            placeholder="Enter Your Occupation"
                            label="Occupation"
                            onChange={ handleChange('occupation') }
                            defaultValue={values.occupation}
                            margin="normal"
                            fullWigth
                        /><br />
                        <TextField
                            placeholder="Enter Your City"
                            label="City"
                            onChange={ handleChange('city') }
                            defaultValue={values.city}
                            margin="normal"
                            fullWigth
                        /><br />
                        <TextField
                            placeholder="Enter Your Bio"
                            label="Bio"
                            onChange={ handleChange('bio') }
                            defaultValue={values.bio}
                            margin="normal"
                            fullWigth
                        /><br />
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Confirmer et Continuer
                        </Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FromPersonalDetails;