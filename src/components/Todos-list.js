import _ from 'lodash';
import React from 'react';
import TodosListHeader from './Todos-list-header';
import TodosListItem from './Todos-list-item';

class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <table className="table table-bordered">
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

export default TodosList;