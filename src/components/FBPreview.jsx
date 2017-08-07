import React, {Component} from 'react';

export default class FBPreview extends Component {
		render() {
				return (
						<div className="col-sm-5 col-xs-offset-1 col-xs-10">
								<div id='fb_preview'>
										<div id='fb_msg'>
												<span id='fb_msg_txt'>{this.props.text}</span>
										</div>
										<div id='img_wrap'>
												<div id='fb_img'>
														<img
																className="img-responsive"
																id='fb_img_pic'
																alt='FB preview'
																src={this.props.imagePreviewUrl}/></div>
												<div id='fb_desc_box'>
														<div id='fb_header'>
																<span id='fb_header_txt'>{this.props.headline}</span>
														</div>
														<div id='fb_desc'>
																<span id='fb_desc_txt'>{this.props.description}</span>
														</div>
														<div id='fb_link'>
																<span id='fb_link_txt'>Optus.com.au</span>
														</div>
												</div>

										</div>

								</div>
						</div>
				)
		}
}
