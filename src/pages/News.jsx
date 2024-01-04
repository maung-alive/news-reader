import React from 'react'
import { FaCalendarAlt, FaFacebook, FaFacebookF, FaLinkedin, FaShare, FaShareAlt, FaShareAltSquare, FaTwitter, FaUser } from 'react-icons/fa';
import RelatedNews from '../components/RelatedNews';
import SideRelated from '../components/SideRelated';

function ShareBtns() {
    return (
        <div className="flex justify-start gap-x-3 items-center my-4">
            <div className="grid grid-cols-[1fr_2fr] items-center text-white rounded-sm overflow-hidden group hover:rounded-md hover:translate-y-0.5 duration-200">
                <div className="group-hover:bg-cyan-700 bg-cyan-600 px-2 py-1">
                    <FaTwitter className='text-xl' />
                </div>
                <div className="group-hover:bg-cyan-500 bg-cyan-400 p-1 font-medium text-sm">
                    Twitter
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-center text-white rounded-sm overflow-hidden group hover:rounded-md hover:translate-y-0.5 duration-200">
                <div className="group-hover:bg-blue-700 bg-blue-600 px-2 py-1">
                    <FaFacebookF className='text-xl' />
                </div>
                <div className="group-hover:bg-blue-500 bg-blue-400 p-1 font-medium text-sm">
                    Facebook
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-center text-white rounded-sm overflow-hidden group hover:rounded-md hover:translate-y-0.5 duration-200">
                <div className="group-hover:bg-indigo-700 bg-indigo-600 px-2 py-1">
                    <FaLinkedin className='text-xl' />
                </div>
                <div className="group-hover:bg-indigo-500 bg-indigo-400 p-1 font-medium text-sm">
                    Linkedin
                </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-center text-white rounded-sm overflow-hidden group hover:rounded-md hover:translate-y-0.5 duration-200">
                <div className="group-hover:bg-red-700 bg-red-600 px-2 py-1">
                    <FaShareAlt className='text-xl' />
                </div>
                <div className="group-hover:bg-red-500 bg-red-400 p-1 font-medium text-sm">
                    Share
                </div>
            </div>
        </div>
    )
}

export default function News({ data }) {
    let sample_img = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6I8fLfY-g3YLU9G6EpHshxGedvA06mfQC3iZwbjrZHSulq3E4XioWUjgEriajsPNdy7Ys2G72VcIqcWNf5aygYROT6Ukcymot0GQCluzkdnr04ZI07ymwWhRvZIrFWbuhBH1yHmTtZVrq-IREDdW8lEb7AVXZb77xAntYc2jra2Q1Kb6dKMHEZqzIEF00/s728-rw-ft-e30/ssh.jpg";

    return (
        <div className='lg:pl-56 lg:pr-48'>
            <h3 className="text-4xl font-bold leading-[4rem] py-6">New Terrapin Flaw Could Let Attackers Downgrade SSH Protocol Security</h3>

            <div className="grid grid-cols-[2fr_1fr]">
                <div className="">
                    <div className="px-3 flex justify-between items-center text-sm md:text-md font-medium">
                        <div className="flex items-center justify-start gap-x-2 pb-3">
                            <FaCalendarAlt /> {new Date().toDateString()} <span className="pl-2"></span> <FaUser /> Maung
                        </div>
                        <span className='text-green-950'>
                            thehackersnews
                        </span>
                    </div>
                    <img
                        className='w-full h-auto min-w-[400px] rounded-xl'
                        src={sample_img}
                        alt=""
                    />

                    <div className="text-md text-left leading-8 pt-4 break-words">
                        Security researchers from Ruhr University Bochum have discovered a vulnerability in the Secure Shell (SSH) cryptographic network protocol that could allow an attacker to downgrade the connection's security by breaking the integrity of the secure channel.

                        Called Terrapin (CVE-2023-48795, CVSS score: 5.9), the exploit has been described as the "first ever practically exploitable prefix truncation attack."

                        "By carefully adjusting the sequence numbers during the handshake, an attacker can remove an arbitrary amount of messages sent by the client or server at the beginning of the secure channel without the client or server noticing it," researchers Fabian Bäumer, Marcus Brinkmann, and Jörg Schwenk said.

                        SSH is a method for securely sending commands to a computer over an unsecured network. It relies on cryptography to authenticate and encrypt connections between devices.

                        This is accomplished by means of a handshake in which a client and server agree upon cryptographic primitives and exchange keys required for setting up a secure channel that can provide confidentiality and integrity guarantees.

                        However, a bad actor in an active adversary-in-the-middle (AitM) position with the ability to intercept and modify the connection's traffic at the TCP/IP layer can downgrade the security of an SSH connection when using SSH extension negotiation.

                        "The attack can be performed in practice, allowing an attacker to downgrade the connection's security by truncating the extension negotiation message (RFC8308) from the transcript," the researchers explained.

                        "The truncation can lead to using less secure client authentication algorithms and deactivating specific countermeasures against keystroke timing attacks in OpenSSH 9.5."

                        Another crucial prerequisite necessary to pulling off the attack is the use of a vulnerable encryption mode such as ChaCha20-Poly1305 or CBC with Encrypt-then-MAC to secure the connection.

                        "In a real-world scenario, an attacker could exploit this vulnerability to intercept sensitive data or gain control over critical systems using administrator privileged access," Qualys said. "This risk is particularly acute for organizations with large, interconnected networks that provide access to privileged data."

                        The flaw impacts many SSH client and server implementations, such as OpenSSH, Paramiko, PuTTY, KiTTY, WinSCP, libssh, libssh2, AsyncSSH, FileZilla, and Dropbear, prompting the maintainers to release patches to mitigate potential risks.

                        "Because SSH servers and OpenSSH in particular are so commonly used throughout cloud-based enterprise application environments, it's imperative for companies to ensure they have taken appropriate measures to patch their servers," Yair Mizrahi, senior security researcher of security research at JFrog, told The Hacker News.

                        "However, a vulnerable client connecting to a patched server will still result in an vulnerable connection. Thus, companies must also take steps to identify every vulnerable occurrence across their entire infrastructure and apply a mitigation immediately."

                        Found this article interesting? Follow us on Twitter  and LinkedIn to read more exclusive content we post.

                        
                        <ShareBtns />
                    </div>
                </div>

                <div className="w-full pl-8">
                    <SideRelated />
                </div>


            </div>

            <RelatedNews />
        </div>
    )
}
