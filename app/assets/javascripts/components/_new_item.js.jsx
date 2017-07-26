var NewItem = React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        // $.ajax({
        //     url: '/api/v1/items',
        //     type: 'POST',
        //     data: { item: { name: name, description: description } },
        //     success: (response) => {
        //         console.log('it worked!', response);
        //     }
        // });
    },
    render() {
        return (
                <div>
                    <input ref='name' />
                    <input ref='description' />
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});
