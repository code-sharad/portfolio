
import React from "react";
import { experiencesData } from "@/lib/data";

export default function Component() {
    return (
        <div className="relative mt-12">
            {/* vertical line across the whole timeline */}
            <div className="absolute left-[1rem] sm:left-[calc(10rem+1rem)] top-0 bottom-0 w-[2px] bg-stone-900 dark:bg-stone-900 pointer-events-none" />

            <ul className="grid gap-y-10">
                {experiencesData.map((item, index) => (
                    <li
                        key={`${item.title}-${index}`}
                        className="grid grid-cols-[2rem_1fr] sm:grid-cols-[10rem_2rem_1fr] items-start gap-x-4"
                    >
                        {/* date (desktop) */}
                        <div className="hidden sm:block text-sm text-stone-900 text-right pr-2">
                            {item.date}
                        </div>

                        {/* axis column with dot */}
                        <div className="relative h-4">
                            <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-stone-600 dark:border-stone-900 bg-stone-900 z-10" />
                        </div>

                        {/* content */}
                        <div className="col-start-2 sm:col-start-3">
                            {/* date (mobile) */}
                            <p className="sm:hidden text-xs text-gray-500 mb-1">{item.date}</p>

                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            {item.location ? (
                                <p className="text-xs text-stone-800 mt-0.5">{item.location}</p>
                            ) : null}
                            <p className="mt-2 rounded-lg   p-4 text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
