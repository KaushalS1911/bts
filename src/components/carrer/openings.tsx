import React from 'react';

interface JobOpening {
    title: string;
    type: string;
    experience: string;
}

function Openings() {
    const jobOpenings: JobOpening[] = [
        {
            title: "Front-end Developer",
            type: "Full Time",
            experience: "+1 year Exp."
        },
        {
            title: "UI/UX Designer",
            type: "Full Time",
            experience: "+1 year Exp."
        },
        {
            title: "Business Executive",
            type: "Full Time",
            experience: "+1 year Exp."
        }
    ];

    return (
        <div className="bg-[#1A1818] p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl container mx-auto">
                <div className="mb-6">
                    <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                        Openings
                    </span>
                </div>

                <div className="space-y-4">
                    {jobOpenings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1818] border border-[#989898] rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                        >
                            <h3 className="text-white text-[20px] sm:text-[24px] font-medium sm:text-left">
                                {job.title}
                            </h3>

                            <div className="text-gray-300 text-[18px] sm:text-[20px]">
                                {job.type}
                            </div>

                            <div className="text-gray-300 text-[18px] sm:text-[20px]">
                                {job.experience}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Openings;
