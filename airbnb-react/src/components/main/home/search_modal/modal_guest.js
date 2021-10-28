import React from 'react'
import Category from './category'
import styles from './search_modal.module.css'

function ModalGuest({ type, category, plus, minus }) {

  return (
    <>
      {type &&
        <div className={styles.guest}>
          {
            category.map(item => (
              <Category key={item.id} item={item} plus={plus} minus={minus} />
            ))
          }
        </div>
      }
    </>
  )
}

export default ModalGuest
