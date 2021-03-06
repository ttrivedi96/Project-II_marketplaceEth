import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useWeb3 } from '@components/providers'
import { Button } from '@components/ui/common/'
import { useAccount } from '@components/web3/hooks/useAccount'


export default function Navbar() {

    const { connect, isLoading, requireInstall } = useWeb3()
    const { account } = useAccount()
    return (
        <section>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative" aria-label="Global">
                    <div className="flex flex-col xs:flex-row justify-between items-center">
                        <div>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    Home
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    Market Place
                                </a>
                            </Link>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                                    Blog
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">Wishlist</a>
                            </Link>

                            {isLoading ?
                                <Button
                                    disabled={true}
                                    onClick={connect}>
                                    Loading...
                                </Button> :
                                account ?
                                    <Button
                                        variant='red'
                                        hoverable={false}
                                        className="cursor-default">
                                        Hi there
                                    </Button> :
                                    requireInstall ?
                                        <Button
                                            onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                                            Install Metamask
                                        </Button> :
                                        <Button
                                            onClick={connect}>
                                            Connect
                                        </Button>
                            }

                        </div>
                    </div>
                </nav>
            </div >
            {account &&
                <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
                    <div className="text-white bg-indigo-600 rounded-md p-2">
                        {account}
                    </div>
                </div>}
        </section >
    )
}

