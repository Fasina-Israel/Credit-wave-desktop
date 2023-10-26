import Curriculum from './Curriculum';
import Curriculum2 from './Curriculum2';
import Curriculum3 from './Curriculum3';
import Curriculum4 from './Curriculum4';
import React, { useState, createContext, useContext } from 'react';
import { CurriculumContext } from '../outlet/UpdateProfile';



const ParentCurriculum = () => {
    const { initialFormValue } = useContext(CurriculumContext);

    const [state, setState] = useState(initialFormValue)

    const { currentStep } = state;
    return (
        <CurriculumContext.Provider value={{ initialFormValue: state, updateForm: setState }}>
            {currentStep === 'step1' && <Curriculum />}
            {currentStep === 'step2' && <Curriculum2 />}
            {currentStep === 'step3' && <Curriculum3 />}
            {currentStep === 'step4' && <Curriculum4 />}
        </CurriculumContext.Provider >
    )
}
export default ParentCurriculum;