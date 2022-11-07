import { render } from '@testing-library/react';
import React from 'react';
import { Modal, Spin } from 'antd';
import {useEffect, useState} from 'react';
import {StudentSocialContract, MyERC20Contract, MyERC721Contract, web3} from "../utils/contracts";
import './index.css';

const GanacheTestChainId = '0x539' // Ganache默认的ChainId = 0x539 = Hex(1337)
// TODO change according to your configuration
const GanacheTestChainName = 'Ganache Test Chain'
const GanacheTestChainRpcUrl = 'http://127.0.0.1:8545'


const StudentSocietyPage = () => { 
    const abort = 0;
    const pending = 1;
    const pass = 2;

    const [account, setAccount] = useState('');
    const [userPoints, setUserPoints] = useState(0);
    const [userProposals, setUserProposals] = useState(0);
    const [userSouviners, setUserSouviners] = useState(0);
    const [userPass, setUserPass] = useState(0);
    const [isUserClaimPoint, setIsUserClaimPoint] = useState(false);
    const [isUserCanClaimSouviner, setIsUserCanClaimSouviner] = useState(false);

    const [proposalCost, setProposalCost] = useState(0);
    const [proposalReward, setProposalReward] = useState(0);
    const [voteCost, setVoteCost] = useState(0);
    const [totalProposals, setTotalProposals] = useState(0);

    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);

    const [currentProposal, setCurrentProposal] = useState(0);
    const [currentProposalName, setCurrentProposalName] = useState('');
    const [currentProposalTitle, setCurrentProposalTitle] = useState('');
    const [currentProposalStartTime, setCurrentProposalStartTime] = useState(0);
    const [currentProposalDuration, setCurrentProposalDuration] = useState(0);
    const [currentProposalContent, setCurrentProposalContent] = useState('');
    const [currentProposalSupport, setCurrentProposalSupport] = useState(0);
    const [currentProposalOppose, setCurrentProposalOppose] = useState(0);
    const [currentProposalState, setCurrentProposalState] = useState(pending);

    const [proposalName, setProposalName] = useState('');
    const [proposalProposer, setProposalProposer] = useState('');
    const [proposalContent, setProposalContent] = useState('');
    const [proposalDuration, setProposalDuration] = useState(0);
    const [proposalObjectList, setProsalObjectList] = useState(new Array());
    const [voteNum, setVoteNum] = useState(0);

    useEffect(() => {
        // 初始化检查用户是否已经连接钱包
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        const initCheckAccounts = async () => {
            // @ts-ignore
            const {ethereum} = window;
            if (Boolean(ethereum && ethereum.isMetaMask)) {
                // 尝试获取连接的用户账户
                const accounts = await web3.eth.getAccounts()
                if(accounts && accounts.length) {
                    setAccount(accounts[0])
                }
            }
        }

        initCheckAccounts()
    })

    useEffect(() => {
        const getStudentSocialContractInfo = async () => {
            if (StudentSocialContract) {
                const _proposalCost = await StudentSocialContract.methods.PROPOSAL_COST().call();
                setProposalCost(_proposalCost);
                const _proposalReward = await StudentSocialContract.methods.PROPOSAL_REWARD().call();
                setProposalReward(_proposalReward);
                const _voteCost = await StudentSocialContract.methods.VOTE_COST().call();
                setVoteCost(_voteCost);
                const _totalProposals = await StudentSocialContract.methods.totalProposals().call();
                setTotalProposals(_totalProposals);
            } else {
                alert('Contract not exists.')
            }
        }

        getStudentSocialContractInfo()
    })

    useEffect(() => {
        const getProposalListInfo = async () => {
            if (StudentSocialContract) {
                var _proposalObjectList = new Array();
                var _totalProposals = await StudentSocialContract.methods.totalProposals().call();
                for (let i = 0; i < _totalProposals; ++i)
                    _proposalObjectList[i] = await getProposalInfo(i);
                setProsalObjectList(_proposalObjectList);
            } else {
                alert('Contract not exists.')
            }
        }

        getProposalListInfo();
    }, [totalProposals])

    useEffect(() => {
        const getAccountInfo = async () => {
            if (StudentSocialContract && MyERC20Contract && MyERC721Contract) {
                const _isUserCanClaimPoint = await MyERC721Contract.methods.ifCanClaimSouviner(account).call();
                setIsUserCanClaimSouviner(_isUserCanClaimPoint);
                const _userPoints = await MyERC20Contract.methods.balanceOf(account).call();
                setUserPoints(_userPoints);
                const _userProposals = await StudentSocialContract.methods.getUserProposals(account).call();
                setUserProposals(_userProposals);
                const _userPass = await StudentSocialContract.methods.getUserPass(account).call();
                setUserPass(_userPass);
                const _userSouviners = await MyERC721Contract.methods.balanceOf(account).call();
                setUserSouviners(_userSouviners);
            } else {
                alert('Contract not exists.');
            }
        }

        if(account !== '') {
            getAccountInfo();
        }
    })

    const getProposalInfo = async (i: Number) => {
        let info = new Array();
        info[0] = await StudentSocialContract.methods.getProposalName(i).call();
        info[1] = await StudentSocialContract.methods.getProposalTitle(i).call();
        info[2] = await StudentSocialContract.methods.getProposalStartTime(i).call();
        info[3] = await StudentSocialContract.methods.getProposalDuration(i).call();
        info[4] = await StudentSocialContract.methods.getProposalContent(i).call();
        info[5] = await StudentSocialContract.methods.getProposalSupport(i).call();
        info[6] = await StudentSocialContract.methods.getProposalOppose(i).call();
        info[7] = await StudentSocialContract.methods.getProposalState(i).call();
        var infoObject = {
            id: i,
            name: info[0],
            title: info[1],
            startTime: info[2],
            duration: info[3],
            content: info[4],
            support: info[5],
            oppose: info[6],
            state: info[7]
        }
        return infoObject;
    }

    const getCurrentProposalInfo = async() => {
        const _currentProposalName = await StudentSocialContract.methods.getProposalName(currentProposal).call();
        setCurrentProposalName(_currentProposalName);
        const _currentProposalTitle = await StudentSocialContract.methods.getProposalTitle(currentProposal).call();
        setCurrentProposalTitle(_currentProposalTitle);
        const _currentProposalStartTime = await StudentSocialContract.methods.getProposalStartTime(currentProposal).call();
        setCurrentProposalStartTime(_currentProposalStartTime);
        const _currentProposalDuration = await StudentSocialContract.methods.getProposalDuration(currentProposal).call();
        setCurrentProposalDuration(_currentProposalDuration);
        const _currentProposalContent = await StudentSocialContract.methods.getProposalContent(currentProposal).call();
        setCurrentProposalContent(_currentProposalContent);
        const _currentProposalSupport = await StudentSocialContract.methods.getProposalSupport(currentProposal).call();
        setCurrentProposalSupport(_currentProposalSupport);
        const _currentProposalOppose = await StudentSocialContract.methods.getProposalOppose(currentProposal).call();
        setCurrentProposalOppose(_currentProposalOppose);
        const _currentProposalState = await StudentSocialContract.methods.getProposalState(currentProposal).call();
        setCurrentProposalState(_currentProposalState);
    }

    const onConnectWallet = async () => {
        // 查看window对象里是否存在ethereum（metamask安装后注入的）对象
        // @ts-ignore
        const {ethereum} = window;
        if (!Boolean(ethereum && ethereum.isMetaMask)) {
            alert('MetaMask is not installed!');
            return;
        }

        try {
            // 如果当前小狐狸不在本地链上，切换Metamask到本地测试链
            if (ethereum.chainId !== GanacheTestChainId) {
                const chain = {
                    chainId: GanacheTestChainId, // Chain-ID
                    chainName: GanacheTestChainName, // Chain-Name
                    rpcUrls: [GanacheTestChainRpcUrl], // RPC-URL
                };

                try {
                    // 尝试切换到本地网络
                    await ethereum.request({method: "wallet_switchEthereumChain", params: [{chainId: chain.chainId}]})
                } catch (switchError: any) {
                    // 如果本地网络没有添加到Metamask中，添加该网络
                    if (switchError.code === 4902) {
                        await ethereum.request({ method: 'wallet_addEthereumChain', params: [chain]
                        });
                    }
                }
            }

            // 小狐狸成功切换网络了，接下来让小狐狸请求用户的授权
            await ethereum.request({method: 'eth_requestAccounts'});
            // 获取小狐狸拿到的授权用户列表
            const accounts = await ethereum.request({method: 'eth_accounts'});
            // 如果用户存在，展示其account，否则显示错误信息
            setAccount(accounts[0] || 'Not able to get accounts');
        } catch (error: any) {
            alert(error.message)
        }
    }

    const showModal1 = () => {
        setIsModal1Open(true);
    }

    const hideModal1 = () => {
        setIsModal1Open(false);
    }

    const showModal2 = (id: number) => {
        setCurrentProposal(id);
        setIsModal2Open(true);
    }

    const hideModal2 = () => {
        setCurrentProposal(0);
        setIsModal2Open(false);
    }

    const showModal3 = () => {
        setIsModal3Open(true);
    }

    const hideModal3 = () => {
        setIsModal3Open(false);
    }

    const onClaimPoints = async () => {
        if (MyERC20Contract) {
            try {
                await MyERC20Contract.methods.claimPoints().send({
                    from: account                    
                });

                alert('You have succeeded in claiming SS-Token');
            } catch (error: any) {
                alert(error.message);
            }
        }
        else {
            alert('Contract not exists.');
        }
    }

    const onCommitProposal = async () => { 
        hideModal1();
        if (StudentSocialContract && MyERC20Contract) {
            try {
                await MyERC20Contract.methods.approve(StudentSocialContract.options.address, proposalCost).send({
                    from: account
                });

                await StudentSocialContract.methods.initiateProposal(proposalProposer, proposalName, 60 * proposalDuration, proposalContent).send({
                    from: account
                });

                var _name  = await StudentSocialContract.methods.getProposalName(userProposals).call();
                var _title = await StudentSocialContract.methods.getProposalTitle(userProposals).call();
                var _startTime = await StudentSocialContract.methods.getProposalStartTime(userProposals).call();
                var _state = await StudentSocialContract.methods.getProposalState(userProposals).call();
                var _proposalObject = {
                    id: userProposals,
                    name: _name,
                    title: _title,
                    startTime: _startTime,
                    state: _state
                }
                proposalObjectList.push(_proposalObject);

                setUserProposals(userProposals + 1);
            }
            catch (error: any) {
                alert(error.message);
            }
        }
    }

    function ProposalList() {
        const listItems = proposalObjectList.map((_item) => (
                <li key={_item.id} className="proposal" onClick={() => showModal2(_item.id)}>
                    <div className="frame">
                        {
                            _item.state == abort ? (<div className="prostate fr" style={{backgroundColor: "#FE676F"}}>Abort</div>) : (
                                _item.state == pending ? (<div className="prostate fr" style={{backgroundColor: "#FAC372"}}>Pend</div>) :
                                (<div className="prostate fr" style={{backgroundColor: "#3FBFA0"}}>Pass</div>)
                            )
                        }
                        <h3>{_item.title}</h3>
                        <p className="procontent">{_item.content}</p>
                        <p className="date">{_item.date}</p>
                    </div>
                </li>
            ));
        return (
            <ul className="proposalList">{listItems}</ul>
        );
    }

    function ModalContent(index: number) {
        getCurrentProposalInfo();
        if (isModal2Open)
            return (
                <div>
                    <p className="modalTitle">{currentProposalTitle}</p>
                    <p className="modalItem">Proposer: </p><p className="_proposalDisplayInfo">{currentProposalName}</p>
                    <p className="modalItem">Due Date: </p><p className="_proposalDisplayInfo">{new Date(1000 * (Number(currentProposalStartTime) + Number(currentProposalDuration))).toLocaleString()}</p><br></br>
                    <p className="modalItem">Support: </p><p className="_proposalDisplayInfo">{currentProposalSupport}</p>
                    <p className="modalItem">Oppose: </p><p className="_proposalDisplayInfo">{currentProposalOppose}</p><br></br>
                    <p className="modalItem">Proposal Content:</p>
                    <textarea className="_proposalContent" readOnly={true} value={currentProposalContent}></textarea>
                    <div className="vote">
                        <form>
                            <input type="button" className="support fl" onClick={onSupport} value="Support"></input>
                            <input type="button" className="oppose fl" onClick={onOppose} value="Oppose"></input>
                            <input type="number" className="input fl votes" placeholder='votes' required onBlur={(e) => setVoteNum(Number(e.target.value))}></input>
                        </form>
                    </div>
                </div>
            );
    }

    const onSupport = async () => {
        if (StudentSocialContract && MyERC20Contract) {
            try {
                if (voteNum <= 0)
                    throw("You should enter positive number of votes");

                hideModal2();   
                await MyERC20Contract.methods.approve(StudentSocialContract.options.address, voteNum * voteCost).send({
                    from: account
                });
                await StudentSocialContract.methods.supportProposal(proposalObjectList[currentProposal].id, voteNum).send({
                    from: account
                });
                setVoteNum(0);
            }
            catch (error: any) {
                alert(error);
            }
        }
        else {
            alert('Contract not exists.');
        }
    }

    const onOppose = async () => {
        if (StudentSocialContract && MyERC20Contract) {
            try {
                if (voteNum <= 0)
                    throw("You should enter positive number of votes");

                hideModal2();
                await MyERC20Contract.methods.approve(StudentSocialContract.options.address, voteNum * voteCost).send({
                    from: account
                });
                await StudentSocialContract.methods.opposeProposal(proposalObjectList[currentProposal].id, voteNum).send({
                    from: account
                })
                setVoteNum(0);
            }
            catch (error: any) {
                alert(error);
            }
        }
        else {
            alert('Contract not exists.');
        }
    }

    const onClaimSouviner = async () => {
        hideModal3();
        if (MyERC721Contract) {
            try {
                
                await MyERC721Contract.methods.claimSouviner(account).send({
                    from: account                    
                });

                alert('You have succeeded in claiming SS-Souviner');
            } catch (error: any) {
                alert(error.message);
            }
        }
        else {
            alert('Contract not exists.');
        }
    }

    const getUserPass = async () => {
        const accounts = await web3.eth.getAccounts();
        const _userPass = await StudentSocialContract.methods.getUserPass(accounts[0]).call();
        setUserPass(_userPass);
    }

    const onRefreshProposals = async () => {
        console.log("refresh");
        getUserPass();
        console.log(userPass);
        var _totalProposals = await StudentSocialContract.methods.totalProposals().call();
        for (let i = 0; i < _totalProposals; ++i) {
            const proposalState = await StudentSocialContract.methods.getProposalState(i).call();
            if (proposalState == pending) {
                var endTime = await StudentSocialContract.methods.getProposalEndTime(i).call();

                if (Date.now() >= 1000 * endTime) {
                    const isPass = await StudentSocialContract.methods.isSupportGreaterOpposse(i).call();

                    const accounts = await web3.eth.getAccounts();
                    console.log(accounts[0]);
                    if (isPass) {
                        await StudentSocialContract.methods.passProposal(i).send({
                            from: accounts[0]
                        });
                        const _userPass = await StudentSocialContract.methods.getUserPass(accounts[0]).call();
                        setUserPass(_userPass + 1);
                        if (userPass >= 2 && userSouviners == 0) {
                            console.log('greater 3');
                            await MyERC721Contract.methods.canClaimSouviner(accounts[0]).send({
                                from: accounts[0]
                            });
                        }
                    }
                    else {
                        await StudentSocialContract.methods.abortProposal(i).send({
                            from: accounts[0]
                        })
                    }
                    const _currentProposalState = await StudentSocialContract.methods.getProposalState(i).call();
                    setCurrentProposalState(_currentProposalState);
                }
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(onRefreshProposals, 10000);
        return () => {
            clearInterval(timer);
        };
    }, [])

    if (account == '') {
        return (
            <div className="container">
                <nav>
                    <div className="w">
                        <div className="logo"></div>
                        <span className="fl webname">组织社团治理平台</span>
                    </div>
                </nav>
                <div className="register">
                    <h1 className="welcome">😀 Welcome!</h1>
                    <form>
                        <button className="connect" onClick={() => onConnectWallet()}>Connect to Wallet</button>
                    </form>
                </div>
            </div>
        );
    }
    else {
        const getUserPoints = async () => {
            const accounts = await web3.eth.getAccounts();
            const _userPoints = await MyERC20Contract.methods.balanceOf(accounts[0]).call();
            setUserPoints(_userPoints);
        }
        const getUserProposals = async () => {
            const accounts = await web3.eth.getAccounts();
            const _userProposals = await StudentSocialContract.methods.getUserProposals(accounts[0]).call();
            setUserProposals(_userProposals);
        }
        const getUserPass = async () => {
            const accounts = await web3.eth.getAccounts();
            const _userPass = await StudentSocialContract.methods.getUserPass(accounts[0]).call();
            setUserPass(_userPass);
        }
        const getUserCanClaimSouviner = async () => {
            const accounts = await web3.eth.getAccounts();
            const _isUserCanClaimPoint = await MyERC721Contract.methods.ifCanClaimSouviner(accounts[0]).call();
            setIsUserCanClaimSouviner(_isUserCanClaimPoint);
        }
        getUserPoints();
        getUserProposals()
        getUserPass();
        getUserCanClaimSouviner();

        return (
            <div className="container">
                <nav>
                    <div className="w">
                        <div className="logo"></div>
                        <span className="fl webname">组织社团治理平台</span>
                        <span className="fr id">{account}</span>
                        <span className="fr account">Account: </span>
                    </div>
                </nav>

                <div className="w">
                    <div className="head"></div>
                    {userSouviners > 0 && <p className="crown">👑</p>}
                    <h1>👋Hello!</h1>
                    <div>
                        <ul className="status">
                            <li className="substatus">
                                <div className="num">{userPoints}</div>
                                <div className="unit">My Points</div>
                            </li>
                            <li className="substatus">
                                <div className="num">{userProposals}</div>
                                <div className="unit">My Proposals</div>
                            </li>                    
                            <li className="substatus">
                                <div className="num">{userPass}</div>
                                <div className="unit" style={{fontSize: 17}}>Passed Proposals</div>
                            </li>
                            <div className="illustration"></div>
                        </ul>                       
                    </div>
                    <div className="main">
                        <h2>Proposals</h2>
                        {
                            totalProposals > 0 ? (
                                <div className="fl prolist">
                                    <ProposalList />
                                </div>
                            ) : (
                                <div className="fl emptylist">No proposal</div>
                            )
                        }

                        
                        <div className="scroll fl"></div>

                        <div className="fr button" onClick={() => onClaimPoints()}>
                            <div className="points"></div>
                            <p className="option">Claim Points</p>
                        </div>                    
                        <div className="fr button" onClick={() => showModal1()}>
                            <div className="new"></div>
                            <p className="option">New Proposal</p>
                        </div>
                        <div className="fr button" onClick={() => showModal3()}>
                            <div className="rule"></div>
                            <p className="option">Get Souviner</p>
                        </div>
                    </div>
                </div>

                <Modal 
                    title={null}
                    wrapClassName={'modal1'}
                    open={isModal1Open} 
                    onOk={onCommitProposal} 
                    onCancel={hideModal1} 
                    okText="Commit"
                    width={700}
                    centered={true}
                    destroyOnClose={true}
                >
                    <p className="modalTitle">New Proposal</p>
                    <form className="newProposalForm">
                        <p className="modalItem">Proposal Name: </p>
                        <input type="text" className="input proposalName" required onBlur={(e) => setProposalName(e.target.value)}></input><br></br>
                        <p className="modalItem">Proposer: </p>
                        <input type="text" className="input proposalProposer" required onBlur={(e) => setProposalProposer(e.target.value)}></input><br></br>
                        <p className="modalItem">Proposal Content: </p><br></br>
                        <textarea className="input proposalContent" required onBlur={(e) => setProposalContent(e.target.value)}></textarea><br></br>
                        <p className="modalItem">Proposal Duration: </p>
                        <input type="number" className="input proposalDuration" placeholder='minutes' required onBlur={(e) => setProposalDuration(Number(e.target.value))}></input>
                    </form>
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    wrapClassName={'modal2'}
                    open={isModal2Open} 
                    onCancel={hideModal2} 
                    width={700}
                    centered={true}
                    destroyOnClose={true}
                >
                    {ModalContent(currentProposal)}
                </Modal>

                <Modal
                    title={null}
                    footer={null}
                    wrapClassName={'modal3'}
                    open={isModal3Open}
                    onCancel={hideModal3}
                    width={650}
                    centered={true}
                >
                    {
                        userSouviners == 0 ? (
                            isUserCanClaimSouviner ? (
                                <div>
                                    <h1 className="souvinerTitle">🎉You can get a souviner !</h1>
                                    <p style={{textAlign: 'center'}}>Since 3 more proposals from you have been passed !</p>
                                    <input type="button" value="Get Souviner" className="getSouviner" onClick={() => onClaimSouviner()}></input>
                                    <input type="button" value="Give Up" className="giveUp" onClick={() => hideModal3()}></input>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="souvinerTitle" style={{textAlign: 'center', marginTop: '90px'}}>😕You can't get the souviner</h1>
                                    <p style={{textAlign: 'center'}}>You need to put forward more proposals.</p>
                                    <input type="button" value="Cancel" className="giveUp" onClick={() => hideModal3()}></input>
                                </div>
                            )
                        ) : (
                            <div>
                                <h1 className="souvinerTitle" style={{textAlign: 'center', marginTop: '90px'}}>😕You can't get the souviner</h1>
                                <p style={{textAlign: 'center'}}>You have already claimed the souviner before.</p>
                                <input type="button" value="Cancel" className="giveUp" onClick={() => hideModal3()}></input>
                            </div>
                        )
                    }
                </Modal>
            </div>
        );
    }
}

export default StudentSocietyPage