import React, { FC } from 'react';
import { Listbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Select.module.scss';

interface SelectProps {
    items: {
        id: number;
        text: string;
    }[];
}

const Select: FC<SelectProps> = ({ items }) => {
    const [selectedCategory, setSelectedCategory] = React.useState(items[0]);

    return (
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            {({ open }) => (
                <>
                    <Listbox.Button className={styles.listBoxSelected}>
                        <span>{selectedCategory.text}</span>
                    </Listbox.Button>
                    <AnimatePresence>
                        {open && (
                            <Listbox.Options
                                static
                                as={motion.ul}
                                initial={{
                                    opacity: 0,
                                    scale: 0.75,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                key="motionUL"
                                className={styles.listBoxItems}
                            >
                                {items.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        value={item}
                                        className={styles.listBoxItem}
                                    >
                                        {item.text}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Listbox>
    );
};

export default Select;
