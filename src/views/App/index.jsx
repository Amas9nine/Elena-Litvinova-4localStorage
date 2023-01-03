import React, { useLayoutEffect, useState } from 'react';
import Header from '../components/Header/Header';

import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

import styles from './index.module.scss';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todoTest4")) ||
    []);

  useLayoutEffect(() => {
    localStorage.setItem("todoTest4", JSON.stringify(tasks))
  }, [tasks])

  const onAdd = (title) => {
    if (title) {
      setTasks([{ id: generateId(), title }, ...tasks])
    }
  }

  const onDelete = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }

  const onEdit = (id, value) => {
    setTasks(tasks.map(item => item.id === id ? {
      ...item,
      title: value
    }
      : item))
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>
        <Header tasks={tasks} />
      </h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={onAdd} />
      </section>
      <section className={styles.articleSection}>
        {tasks.length <= 0 && (
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            title={task.title}
            id={task.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </section>
    </article>
  );
}