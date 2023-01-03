import React from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const InputTask = ({ title, id, onDelete, onEdit }) => {

    const [value, setValue] = useState(title);
    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const onSubmit = (event) => {
        onEdit(id, value);
        setIsEditMode(false)
        event.preventDefault()
    }

    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input
                    checked={checked}
                    type="checkbox"
                    className={styles.inputTaskCheckbox}
                    onChange={(event) => {
                        setChecked(event.target.checked)
                    }}
                />
                {isEditMode ? (
                    <form onSubmit={onSubmit}>
                        < input
                            value={value}
                            type="text"
                            className={styles.inputTaskTitleEdit}
                            onChange={(event) => {
                                setValue(event.target.value)
                            }}
                        />
                    </form>
                ) : (
                    <h3 className={checked ? styles.checkedStyle : ""}>{title}</h3>
                )}
            </label>
            {isEditMode ? (
                <button
                    onClick={onSubmit}
                    aria-label="Edit"
                    className={styles.inputTaskEdit}
                />
            ) : (
                <button
                    onClick={() => {
                        setIsEditMode(true)
                    }}
                    aria-label="Edit"
                    className={styles.inputTaskEdit}
                />
            )}

            <button
                onClick={() => {
                    onDelete(id)
                }}
                aria-label="Remove"
                className={styles.inputTaskRemove}
            />
        </div >
    );
}