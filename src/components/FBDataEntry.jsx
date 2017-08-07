import React, {Component} from 'react';

export default class FBDataEntry extends Component {
    render() {
        return (

            <div className="col-sm-offset-1 col-sm-4 col-xs-offset-1 col-xs-10">
                <h3>Enter Information</h3>
                <div className="form-horizontal">
                    <FBText updateText={this.props.updateText} textCount={this.props.textCount}/>
                    <FBHeadline updateHeadline={this.props.updateHeadline} headlineCount={this.props.headlineCount}/>
                    <FBLinkDescription updateDescription={this.props.updateDescription} descriptionCount={this.props.descriptionCount}/>
                    <FBImageFile updateFile={this.props.updateFile}/>
                </div>
            </div>

        )
    }
}
class FBText extends Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor="fb_msg_input" className="col-xs-4 control-label">Text</label>
                <div className="col-xs-8">
                    <div className="input-group">
                        <input className="form-control" id='fb_msg_input' type="text" onKeyUp={this.props.updateText}/>
                        <div className="input-group-addon">
                            <span id="fb_msg_count">{this.props.textCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FBHeadline extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="fb_header_input" className="col-xs-4 control-label">Headline</label>
                <div className="col-xs-8">
                    <div className="input-group">
                        <input className="form-control" id="fb_header_input" type="text" onKeyUp={this.props.updateHeadline}/>
                        <div className="input-group-addon">
                            <span id="fb_header_count">{this.props.headlineCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FBLinkDescription extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="fb_desc_input" className="col-xs-4 control-label">Link Description</label>
                <div className="col-xs-8">
                    <div className="input-group">
                        <input className="form-control" id='fb_desc_input' type="text" onKeyUp={this.props.updateDescription}/>
                        <div className="input-group-addon">
                            <span id="fb_desc_count">{this.props.descriptionCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FBImageFile extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="imgInp" className="col-xs-4 control-label" id="fb_img_upload">Image File</label>
                <div className="col-xs-8">
                    <label className="btn btn-sm btn-default btn-file">
                        Browse Images<input
                            type="file"
                            id="imgInp"
                            style={{
                                display: "none"
                            }}
                            onChange={this.props.updateFile}/>
                    </label>
                </div>
            </div>
        )
    }
}