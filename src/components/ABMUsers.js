import React from 'react';

const ABMUsers = ({ name }) => {
	return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">ID</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>German Morone</td>
						<td>3453453453535</td>
						<td>3453453453535</td>
					</tr>
					<tr>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ABMUsers;