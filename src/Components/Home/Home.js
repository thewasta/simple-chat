import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component {
    state = {};

    render() {
        return (
            <Grid
                container
                spacing={0}
                xs={6}
            >
                <Grid item>
                    <h2>This grid item is centered both horizontally and vertically.</h2>
                    <i>
                        <p>
                            Note the styling of body, html and #root in index.css for this to
                            work.
                        </p>
                        <p>
                            Thanks to <a href="https://codesandbox.io/s/gLE85V2D">STUNAZ</a> for
                            improving upon my original!
                        </p>
                    </i>
                </Grid>
            </Grid>
        );
    }
}