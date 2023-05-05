import Link from 'next/link'
import React from 'react'

const Content = ({ tab, activeTab ,activeSubTab }) => {


    // const tabContent = tabs[activeTab].subTabs[activeSubTab].subContent

    return (
        <div>
            <ul>
                {tab.map((tabs, id) => (
                    < li key={id} className='text-white'>
                        {tabs.subtabs && activeTab === id && (
                            <div className="ml-3 mt-2">
                                {tab.subtabs.subContent.map((subtab, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        href={subtab.localLink}
                                        className={`flex items-center gap-2 py-1 px-4 text-sm text-left text-light-secondary font-medium hover:underline duration-200 ${activeSubTab === subIndex
                                            ? " text-white underline font-bold"
                                            : "text-light-secondary"
                                            }`}
                                        onClick={() => setActiveSubTab(subIndex)}
                                    >
                                        {subtab.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))
                }

            </ul>
        </div>
    )
}

export default Content