import React from 'react'

function FaqField() {
    return (
        <div className='p-10 flex flex-col gap-2'>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What are the process of vaccine registration?
                </div>
                <div className="collapse-content">
                    <p> Open an account and get access to the dashboard. Then from the dashboard click on the "Vaccine Registration" button.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How do I know if I have any vaccine ongoing or not?
                </div>
                <div className="collapse-content">
                    <p> In the dashboard you can see if you have any ongoing vaccine and the next dose date.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How can I add my child?
                </div>
                <div className="collapse-content">
                    <p> Click the sidebar and then children. There you can add your child by clicking the "Add Child" button. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How can I register vaccine for my child?
                </div>
                <div className="collapse-content">
                    <p> By clicking the children dashboard button in the childen page, you can access the dashboard of that specific chields dashboard and click on the "Vaccine Registration" It will registe the vaccine for your that specific child.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                Which vaccine is eligible for me? How can I know?
                </div>
                <div className="collapse-content">
                    <p> If you are a guest then you can go to the eligibility check page and enter your date of birth and check. If you are a registered user then you can check your eligibility also and you can see it in your dashboard page, it will show only the eligible vaccines.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DCF0FA]">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How can I log out?
                </div>
                <div className="collapse-content">
                    <p> By clicking the side bar and then logout.</p>
                </div>
            </div>
        </div>
    )
}

export default FaqField