import React from "react";

export default function Socials(props) {
       const data = props.data;
       return (
              <div>
                     <div id="accordion">
                            <div className="card">
                                   <div
                                          className="card-header"
                                          id="headingThree"
                                   >
                                          <h5 className="mb-0">
                                                 <a
                                                        className="btn btn-light collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseUrl"
                                                        aria-expanded="false"
                                                        aria-controls="collapseUrl"
                                                 >
                                                        Socials{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                 </a>
                                          </h5>
                                   </div>
                                   <div
                                          id="collapseUrl"
                                          className="collapse"
                                          aria-labelledby="headingThree"
                                          data-parent="#accordion"
                                   >
                                          <div className="card-body">
                                                 <div className="form-group">
                                                        <label htmlFor="blog">
                                                               Blog
                                                        </label>
                                                        <input
                                                               type="url"
                                                               className="form-control"
                                                               id="blog"
                                                               defaultValue={
                                                                      data.blog
                                                               }
                                                               placeholder="Blog"
                                                        />
                                                 </div>

                                                 <div className="form-group">
                                                        <label htmlFor="facebook">
                                                               Facebook
                                                        </label>
                                                        <input
                                                               type="url"
                                                               className="form-control"
                                                               id="facebook"
                                                               defaultValue={
                                                                      data.facebook
                                                               }
                                                               placeholder="Facebook"
                                                        />
                                                 </div>

                                                 <div className="form-group">
                                                        <label htmlFor="linkedin">
                                                               LinkedIn
                                                        </label>
                                                        <input
                                                               type="url"
                                                               className="form-control"
                                                               id="linkedin"
                                                               defaultValue={
                                                                      data.linkedin
                                                               }
                                                               placeholder="LinkedIn"
                                                        />
                                                 </div>

                                                 <div className="form-group">
                                                        <label htmlFor="gitHub">
                                                               GitHub
                                                        </label>
                                                        <input
                                                               type="url"
                                                               className="form-control"
                                                               id="gitHub"
                                                               defaultValue={
                                                                      data.github
                                                               }
                                                               placeholder="GitHub"
                                                        />
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
