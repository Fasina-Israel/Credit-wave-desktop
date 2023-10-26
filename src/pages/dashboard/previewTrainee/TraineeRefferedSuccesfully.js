import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router';
import '../../../../pages/Admin-create-cohort/cohort/components/addCohortInfo.css';
import successPage from '../../../../assets/success-gif/successPage.gif';

const TraineeRefferedSuccesfully = () => {
    const navigate = useNavigate();
    const dashbd = () => {
        navigate('/admin/programme');
    };
    return (
        <div>
            <div>
                <div className="success-container">
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <CloseIcon
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate(-1);
                                }}
                            />
                        </div>
                        <div className="success-contents">
                            <p className="published-header">Trainee added successfully</p>
                        </div>
                        <div className="gif-container">
                            <div className="success-gif">
                                <img className="gif" src={successPage} alt="" />
                            </div>
                        </div>
                        <div className="success-subtexts">
                            <p className="success-msg1">Refferal Sent </p>
                            <p className="success-msg2">A notificatication has been sent to trainee to cmplete their loan application.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <button type="button" className="success-btn-text" onClick={dashbd}>
                            Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TraineeRefferedSuccesfully;
