import React, { useState } from 'react';
import { useCallback } from 'react';

import styles from './index.module.scss';


export const InputPlus = ({ onAdd }) => {

    const [value, setValue] = useState("");

    const memoUseCallBack = useCallback(() => {
        onAdd(value);
        setValue("")
    }, [value])

    return (
        <div className={styles.inputPlus}>
            <input
                value={value}
                type="text"
                className={styles.inputPlusValue}
                placeholder="Type here..."
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        memoUseCallBack()
                    }
                }}
            />
            <button
                onClick={() => {
                    memoUseCallBack()
                }}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
