import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_BUDGET } from './common/action-types';
import '../scss/budget.scss';

const mapStateToProps = state => {
    return { 
        budgetOn: state.budgetOn
    };
}
const mapDispatchToProps = dispatch => {
    return {
        toggleBudget: () => dispatch({ type: TOGGLE_BUDGET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    class BrukiBudget extends Component {
        constructor(props) {
            super(props);
            this.state = {
                budget: {
                    nombre: '',
                    email: '',
                    tel: '',
                    servicio: '',
                    presupuesto: '',
                    prioridad: 'baja',
                    detalles: ''
                },
                displayForm: true,
                sentStatus: 'off', //[off, ok, error]
                sentErrMsg: ''
            };
            this.fieldChange = this.fieldChange.bind(this);
            this.toggleBudget = this.toggleBudget.bind(this);
            this.submitBudget = this.submitBudget.bind(this);
            this.submitDone = this.submitDone.bind(this);
        }

        toggleBudget() {
            this.props.toggleBudget();
        }

        fieldChange(e) {
            const field = e.target;
            let { budget } = this.state;
            budget[field.name] = field.value;
            this.setState({budget: budget});
        }

        submitBudget(e) {
            e.preventDefault(); //avoid std submit
            
            //bring up variables:
            const { budget } = this.state;
            let { displayForm, sentStatus, sentErrMsg} = this.state,
                data = new FormData();
            
            //prepare data:
            Object.keys(budget).map((key) => {
                data.append(key, budget[key]);
            });

            //Form submit:
            fetch('services/contact.php', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then((response) => {
                    //endpoint response:
                    if(response.result == 'success') {
                        displayForm = false;
                        sentStatus = 'ok';
                    } else {
                        sentStatus = 'error';
                        sentErrMsg = response.errmsg;
                    }
                    this.setState({ displayForm: displayForm, sentStatus: sentStatus, sentErrMsg: sentErrMsg });
                });
        }

        submitDone() {
            //reset all values to default
            this.setState({
                budget: {
                    nombre: '',
                    email: '',
                    tel: '',
                    servicio: '',
                    presupuesto: '',
                    prioridad: 'baja',
                    detalles: ''
                },
                displayForm: true,
                sentStatus: 'off', //[off, ok, error]
                sentErrMsg: ''
            });
            this.toggleBudget();
        }

        render() {
            let { budgetOn } = this.props;
            const { budget, displayForm, sentStatus, sentErrMsg } = this.state,
                content = displayForm? 
                    <>
                        <h2>Solicitud de cotización</h2>
                        <div class={sentStatus == 'error'? 'alert visible' : 'alert'}>{sentErrMsg}</div>
                        <form id="frmBudget">
                            <input type="text" name="nombre" placeholder="Nombre completo*" required onChange={this.fieldChange} />
                            <input type="email" name="email" placeholder="Email*" required onChange={this.fieldChange} />
                            <input type="phone" name="tel" placeholder="Teléfono de contacto*" required onChange={this.fieldChange} />
                            <select name="servicio" onChange={this.fieldChange}>
                                <option value="" disabled selected>--Selecciona un servicio--</option>
                                <option value="Web">Diseño / Desarrollo Web</option>
                                <option value="Campaña">Campaña digital</option>
                                <option value="estrategia">Estrategia completa</option>
                            </select>
                            <select name="presupuesto" class="input_fullSize" onChange={this.fieldChange}>
                                <option value="" disabled selected>--Selecciona el presupuesto de tu proyecto--</option>
                                <option value="<20k">&lt; $20,000</option>
                                <option value="20-50">$20,000 - $50,000</option>
                                <option value="50-100">$50,000 - $100,000</option>
                                <option value="100-200">$100,000 - $200,000</option>
                                <option value=">200k">&gt; $200,000</option>
                            </select>
                            <div class="radioWrapper">
                                <label class="label-super" for="priority">Prioridad:</label>
                                <input type="radio" id="priority-low" name="prioridad" value="baja" checked={budget.prioridad == 'baja'} onChange={this.fieldChange} />
                                <label for="priority-low">Baja</label>
                                <input type="radio" id="priority-med" name="prioridad" value="media" checked={budget.prioridad == 'media'} onChange={this.fieldChange} />
                                <label for="priority-med">Media</label>
                                <input type="radio" id="priority-high" name="prioridad" value="urgente" checked={budget.prioridad == 'urgente'} onChange={this.fieldChange} />
                                <label for="priority-high">Urgente</label>
                            </div>
                            <textarea name="detalles" placeholder="Escribe más detalles de tu proyecto*" required onChange={this.fieldChange}></textarea>
                            <div class="ctas">
                                <input type="submit" class="btn" value="Enviar solicitud" onClick={this.submitBudget} />
                            </div>
                        </form>
                    </>
                    :
                    <div class="form-sent">
                        <h2>¡Muchas gracias por tu confianza!</h2>
                        <p>Tu solicitud ha sido enviada con éxito. En breve nos comunicaremos contigo.</p>
                        <div class="ctas"><button class="btn" onClick={this.submitDone}>Entendido</button></div>
                    </div>
            return (
                <div class={budgetOn? 'lb_bg visible' : 'lb_bg'}>
                    <div class="lb_wrapper">
                        <img class="lb_close" onClick={this.toggleBudget} src="assets/ico-close.png" />
                        <div class="lb_content">
                            {content}
                        </div>
                    </div>
                </div>
            )
        }
    }
);