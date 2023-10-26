import React from 'react'

const AddTraineeInput = () => {
  return (
    <>
         <div style={{ overflowX: 'scroll', maxHeight: '60vh', width: '90vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '1rem' }}>
                    <div className="trainee-input">
                        <h4>First Name</h4>
                        {trainee.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                value={location.state ? trainee[index].firstName : null}
                                onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <h4>Surname</h4>

                        {trainee.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="text"
                                value={location.state ? trainee[index].surname : null}
                                onChange={(e) => handleChange(index, 'surname', e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <h4>Email</h4>
                        {trainee.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={location.state ? trainee[index].email : null}
                                onChange={(e) => handleChange(index, 'email', e.target.value)}
                                required
                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <h5>Amount Requested</h5>
                        {trainee.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="number"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={location.state ? trainee[index].amountRequested : null}
                                onChange={(e) => handleChange(index, 'amountRequested', parseInt(e.target.value))}

                            />
                        ))}
                    </div>
                    <div className="trainee-input">
                        <h4>Initial Deposit</h4>
                        {trainee.map((item, index) => (
                            <input
                                style={{ width: '15rem', height: '3rem' }}
                                key={item}
                                type="number"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                value={location.state ? trainee[index].initialDeposit : null}
                                onChange={(e) => handleChange(index, 'initialDeposit', parseInt(e.target.value))}

                            />
                        ))}
                    </div>
                </div>
                </>
  )
}

export default AddTraineeInput