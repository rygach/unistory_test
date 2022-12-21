import React, { useEffect, useState } from 'react';

// import { MetaMaskInpageProvider } from '@metamask/providers';
// import { ethers } from 'ethers';

const App = () => {
  const [userAccount, setUserAccount] = useState('');
  const [userList, setUserList] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const onConnect = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(account => {
          setUserAccount(account[0]);
        });
    } else {
      alert('Установите Расширение метамаск');
    }
  };

  useEffect(() => {
    fetch('https://new-backend.unistory.app/api/data')
      .then(res => res.json())
      .then(
        result => {
          setUserList({
            isLoaded: true,
            items: result.items,
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }, []);

  const addUser = () => {
    userList.items.unshift({
      name: '123',
      email: '123',
      address: '123',
    });
    console.log(userList.items);
  };

  return (
    <main>
      <div class='wrapper'>
        <div class='header'>
          <div class='header__container'>
            <div class='header__container_logo'>
              <p className='header__container_logo_text'>LOGO</p>
            </div>
            <div class='header__container_connection'>
              {userAccount ? (
                <div>{userAccount}</div>
              ) : (
                <button onClick={onConnect()} class='header__container_btn'>
                  CONNECT METAMASK
                </button>
              )}
            </div>
          </div>
        </div>
        <div class='content'>
          <div class='content__container'>
            <div class='content__container_text'>
              <div class='content__container_text_title'>
                EXPLORE YOUR OWN PLANET IN OUR NEW METAVERSE
              </div>
              <div class='content__container_text_desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quas deleniti sint assumenda exercitationem harum quaerat
                suscipit illo deserunt reprehenderit, eveniet beatae ipsa
                mollitia inventore veritatis ea eius! Ad, odit?
              </div>
            </div>
            <div className='content__container_stat'>
              <div className='content__container_stat_box'>
                <div className='content__container_stat_title'>
                  ROADMAP STATS
                </div>
                <div className='content__container_stat_block'>
                  <div className='content__container_stat_block_title'>
                    12, 345
                  </div>

                  <div className='content__container_stat_block_desc'>
                    Lorem ipsum dolor
                  </div>
                  <div className='content__container_stat_block_line'></div>
                </div>
                <div className='content__container_stat_block'>
                  <div className='content__container_stat_block_title'>
                    12, 345
                  </div>

                  <div className='content__container_stat_block_desc'>
                    Lorem ipsum dolor
                  </div>
                  <div className='content__container_stat_block_line'></div>
                </div>
                <div className='content__container_stat_block'>
                  <div className='content__container_stat_block_title'>
                    12, 345
                  </div>
                  <div className='content__container_stat_block_desc'>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div class='registration'>
            <div class='registration__container'>
              <div class='registration__container_title'>
                BETA TEST REGISTRATION
              </div>
              <div class='registration__container_desc'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis illum voluptates tempora atque recusandae quod nisi
                  perferendis libero hic qui natus assumenda eum, rerum velit
                  provident culpa fugiat aliquid ipsam.
                </p>
              </div>
              <div class='registration__container_form'>
                <label class='registration__container_form_labels'>NAME</label>
                <input
                  className='registration__container__form_input'
                  type='text '
                  placeholder='We will display your name in participation list'
                />
                <label class='registration__container_form_labels'>EMAIL</label>
                <input
                  className='registration__container__form_input'
                  type='text'
                  placeholder='We will display your email in participation list'
                />
                <button
                  class='registration__container__form_btn'
                  onClick={addUser}
                >
                  GET EARLY ACCESS
                </button>
              </div>
            </div>
          </div>
          <div className='list'>
            <div className='list_title'>
              PARTICIPATION LISTING (ENABLE ONLY FOR PARTICIPANTS)
            </div>
            <div className='list_table'>
              <table>
                <tr className='list_head'>
                  <td className='list_col1'>NAME</td>
                  <td className='list_col2'>EMAIL</td>
                  <td className='list_col3'>WALLET</td>
                </tr>

                {userList.items.map(user => (
                  <tr className='list_row'>
                    <td className='list_col1'> {user.username}</td>
                    <td className='list_col2'>{user.email}</td>
                    <td className='list_col3'>{user.address}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
