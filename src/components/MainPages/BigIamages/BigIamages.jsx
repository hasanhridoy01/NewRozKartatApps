
import { Grid } from '@mui/material';
import img1 from '../../../assets/Images/Frame 1000003079.png'

const BigIamages = () => {
    return (
        <div style={{ marginTop: '90px' }}>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item lg={12}>
                    <img style={{ width: '100%' }} src={img1} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default BigIamages;