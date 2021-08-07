import { div } from 'prelude-ls';
import React from 'react';

function FirstReview() {
    return (
        <div>
            <div id="intro3" className="view ">
                <div className="mask container-fluid ">
                    <div className="d-flex flex-column reviewr align-items-end">
                        <div className="col-sm-4 text-center ">
                            <h2 className="hd-br br2 display-3 font-volt  mb-2">Review</h2>
                        </div>
                        <h5 className="col-sm-4 sub-ttl my-4">
                            "Great in-studio experience! Our puppy was initially very excited and he would not sit still. James
                            suggested a quick play to let the pup burn some energy. Then we took great pictures.
                            I really love my new
                            pictures!"
                        </h5>
                        <div className="sub-ttl col-sm-4 text-center ">
                            <h5>- Anderson family</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div id="intro2" class="view ">
                <div className="mask container-fluid ">
                    <div className="d-flex flex-column reviewl">
                        <div className="col-sm-4 text-center ">
                            <h2 className="hd-br br2 display-3 font-volt  mb-2">Review</h2>
                        </div>
                        <h5 className="col-sm-4 sub-ttl my-4">
                            "I can't believe how great our experience was! We initially wanted to take pictures with our horse at a local trail. Unfortunately, the trail had been unexpectedly closed and we had to pick a different setting. We didn't have to reschedule. Luckily James new a great location nearby! We ended up taking the most amazing sunrise pictures with my horse! What a memory!""
                        </h5>
                        <div className="sub-ttl col-sm-4 text-center ">
                            <h5>- Maggie</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default FirstReview