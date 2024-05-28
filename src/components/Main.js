import React, { Component } from 'react';
import jam from '../jam.png';

class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">
                <table className="table table-dark table-striped table-bordered text-white text-center">
                    <thead>
                        <tr>
                            <th scope="col">Balance de Staking</th>
                            <th scope="col">Balance de recompensas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-weight-bold">{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} JAM</td>
                            <td className="font-weight-bold">{window.web3.utils.fromWei(this.props.stellartTokenBalance, 'Ether')} STE </td>
                        </tr>
                    </tbody>
                </table>
                <div className='card mb-4 bg-dark text-white'>
                    <div className='card-body'>
                        <form className='mb-3' onSubmit={(event) => {
                            event.preventDefault()
                            let amount
                            amount = this.input.value.toString()
                            amount = window.web3.utils.toWei(amount, 'Ether')
                            this.props.stakeTokens(amount)
                        }}>
                            <div>
                                <label className='float-left font-weight-bold'>
                                    Stake Tokens
                                </label>
                                <span className='float-right text-muted'>
                                    Balance: {window.web3.utils.fromWei(this.props.jamTokenBalance, 'Ether')}
                                </span>
                            </div>
                            <div className='input-group mb-4'>
                                <input
                                    type="text"
                                    ref={(input) => { this.input = input }}
                                    className="form-control form-control-lg bg-dark text-white"
                                    placeholder='0'
                                    required />

                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <img src={jam} height='32' alt="" />
                                        &nbsp;&nbsp;&nbsp; JAM
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-success btn-block btn-lg'>STAKE!</button>
                        </form>
                        <button
                            type='submit'
                            className='btn btn-danger btn-block btn-lg'
                            onClick={(event) => {
                                event.preventDefault()
                                this.props.unstakeTokens()
                            }}> RETIRAR STAKE</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;
