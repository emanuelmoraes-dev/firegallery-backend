import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Movie } from './Movie'
import { Content } from './Content'
import { Image } from './Image'

@Entity()
export class File {

	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: false })
	filename: string

	@Column({ nullable: false })
	type: string

	@Column({ nullable: false })
	@OneToOne(type => Content)
	@JoinColumn()
	content: Content

	@OneToOne(type => Movie, movie => movie.file)
	movie: Movie

	@OneToOne(type => Image, image => image.file)
	image: Image

}