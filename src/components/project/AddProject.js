import React, { Component } from 'react'

export default class AddProject extends Component {

    constructor() {
        
        super();

        this.state = {
            projectName : "",
            projectIdentifier : "",
            description : "",
            start_date : "",
            end_date : ""
        };
    }

    onChange(e) {
        this.setState (
            { projectName: e.target.value }
        )
    }

    render() {
        return (
            <div>
                <div class="project">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 m-auto">
                                <h5 class="display-4 text-center">
                                    Create Project form
                                </h5>
                                <hr />
                                <form>
                                    <div class="form-group">
                                        <input type="text" 
                                               class="form-control form-control-lg" 
                                               laceholder="Project Name"
                                               name="projectName"
                                               value = { this.state.projectName }
                                               onChange = {this.onChange.bind(this)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" 
                                               class="form-control" 
                                               placeholder="Unique Project ID"
                                               name="projectIdentifier" 
                                               value = { this.state.projectIdentifier }/>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control form-control-lg" 
                                                  placeholder="Project Description"
                                                  name="description"
                                                  value = { this.state.description }></textarea>
                                    </div>
                                    <h6>Start Date</h6>
                                    <div class="form-group">
                                        <input type="date" 
                                               class="form-control form-control-lg" 
                                               name="start_date"
                                               value = { this.state.start_date } />
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div class="form-group">
                                        <input type="date" 
                                               class="form-control form-control-lg" 
                                               name="end_date"
                                               value = { this.state.end_date } />
                                    </div>

                                    <input type="submit" 
                                           class="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
